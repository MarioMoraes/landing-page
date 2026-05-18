import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Gallery />
        <Team />
        <Testimonials />
        <Booking />
        <Instagram />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
