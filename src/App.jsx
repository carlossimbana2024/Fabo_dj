import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Events from "./components/Events";
import WhatsAppButton from "./components/WhatsAppButton";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Events />
        <Contact />
      </main>
      <WhatsAppButton />
      <Footer/>
    </>
  )
}

export default App;
