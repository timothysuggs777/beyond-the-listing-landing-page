import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { Resend } from "npm:resend@4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHtml(fields: {
  name: string;
  email: string;
  phone: string;
  brokerage: string;
  property: string;
  message: string;
  timestamp: string;
}): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 12px;font-weight:600;color:#595650;width:160px;vertical-align:top;">${label}</td><td style="padding:8px 12px;color:#151515;">${escapeHtml(value)}</td></tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>New Beyond the Listing Inquiry</title></head>
<body style="margin:0;padding:0;background:#f2efe8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f2efe8;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.08);">
        <tr>
          <td style="background:#050505;padding:24px 32px;">
            <p style="margin:0;color:#c99b45;font-size:12px;letter-spacing:.2em;text-transform:uppercase;font-weight:800;">Beyond the Listing</p>
            <h1 style="margin:6px 0 0;color:#ffffff;font-size:22px;font-weight:600;">New Inquiry</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #e5e0d8;border-radius:8px;overflow:hidden;">
              ${row("Name", fields.name)}
              ${row("Email", fields.email)}
              ${row("Phone", fields.phone)}
              ${row("Brokerage", fields.brokerage)}
              ${row("Property / Area", fields.property)}
              ${row("Message", fields.message)}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px 28px;">
            <p style="margin:0;color:#999;font-size:12px;">Submitted: ${escapeHtml(fields.timestamp)}</p>
            <p style="margin:4px 0 0;color:#999;font-size:12px;">Source: Beyond the Listing landing page</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function buildText(fields: {
  name: string;
  email: string;
  phone: string;
  brokerage: string;
  property: string;
  message: string;
  timestamp: string;
}): string {
  return [
    "New Beyond the Listing Inquiry",
    "==============================",
    `Name:      ${fields.name}`,
    `Email:     ${fields.email}`,
    `Phone:     ${fields.phone}`,
    `Brokerage: ${fields.brokerage}`,
    `Property:  ${fields.property}`,
    "",
    "Message:",
    fields.message,
    "",
    `Submitted: ${fields.timestamp}`,
    "Source: Beyond the Listing landing page",
  ].join("\n");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("RESEND_API_KEY");
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return new Response(
        JSON.stringify({ error: "Email service not configured." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();

    // Honeypot check
    if (body.companyWebsite) {
      return new Response(
        JSON.stringify({ ok: true }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const name = (body.name ?? "").toString().trim().slice(0, 200);
    const email = (body.email ?? "").toString().trim().slice(0, 200);
    const phone = (body.phone ?? "").toString().trim().slice(0, 50);
    const brokerage = (body.brokerage ?? "").toString().trim().slice(0, 200);
    const property = (body.property ?? "").toString().trim().slice(0, 300);
    const message = (body.message ?? "").toString().trim().slice(0, 2000);

    if (!name || !email || !phone || !brokerage) {
      return new Response(
        JSON.stringify({ error: "Required fields missing: name, email, phone, brokerage." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email address." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      dateStyle: "full",
      timeStyle: "short",
    });

    const fields = { name, email, phone, brokerage, property, message, timestamp };

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Beyond the Listing <casting@beyondthelistingshow.com>",
      to: ["casting@beyondthelistingshow.com"],
      replyTo: email,
      subject: `New Beyond the Listing inquiry from ${name}`,
      html: buildHtml(fields),
      text: buildText(fields),
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to send email." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
