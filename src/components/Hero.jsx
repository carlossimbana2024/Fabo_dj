import { motion } from "framer-motion";
import heroImg from "../assets/img/hero.png";

function Hero() {
    return (
    <section className="hero">
        <div className="hero-content container">
        <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <p className="tag">Fiestas & Eventos</p>
            <h2>Haz que tu evento suene inolvidable</h2>
            <p>
            Servicio de DJ, animación, iluminación, efectos especiales y sonido
            profesional para bodas, cumpleaños y eventos corporativos.
            </p>

            <a 
            href="https://wa.me/593995612680" 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            >
            Cotizar por WhatsApp
            </a>
        </motion.div>

        <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
        >
            <img src={heroImg} alt="Servicio profesional de DJ para eventos" />
        </motion.div>
        </div>
    </section>
    );
}

export default Hero;