/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text)
      - `brokerage` (text)
      - `property_address` (text)
      - `message` (text)
      - `created_at` (timestamptz, default now)

  2. Security
    - Enable RLS on `contact_submissions`
    - Allow anonymous insert (public contact form — no auth required)
    - No select policy for public (admin-only read via service role)

  Notes:
    - This table stores inbound leads from the Beyond the Listing landing page contact form.
    - Reads are restricted; only inserts are allowed publicly.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text DEFAULT '',
  brokerage text DEFAULT '',
  property_address text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
