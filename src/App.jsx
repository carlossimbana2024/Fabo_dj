import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Events from "./components/Events";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Events />
        <Contact />
      </main>
      <Footer/>
    </>
  )
}

export default App;
