import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingSocialIcons from './components/FloatingSocialIcons';

export default function App() {
  return (
    <div className="min-h-screen bg-craft-cream">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatingSocialIcons />
    </div>
  );
}
