import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import HostStrip from './sections/HostStrip';
import ShowOverview from './sections/ShowOverview';
import Benefits from './sections/Benefits';
import Deliverables from './sections/Deliverables';
import ProcessAudience from './sections/ProcessAudience';
import TestimonialContact from './sections/TestimonialContact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HostStrip />
        <ShowOverview />
        <Benefits />
        <Deliverables />
        <ProcessAudience />
        <TestimonialContact />
      </main>
      <Footer />
    </>
  );
}
