import { motion } from "framer-motion";

import evento1 from "../assets/gallery/evento1.jpg";
import evento2 from "../assets/gallery/evento2.jpg";
import evento3 from "../assets/gallery/evento3.jpg";
import evento4 from "../assets/gallery/evento4.jpg";

function Gallery() {
    const images = [evento1, evento2, evento3, evento4];

    return (
    <section className="gallery section">
        <div className="container">
        <p className="section-tag">Momentos reales</p>

        <h2 className="section-title">
            Eventos que hemos hecho inolvidables
        </h2>

        <div className="gallery-grid">
            {images.map((image, index) => (
            <motion.div
                className="gallery-item"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <img src={image} alt={`Evento ${index + 1}`} />
            </motion.div>
            ))}
        </div>
        </div>
    </section>
    );
}

export default Gallery;