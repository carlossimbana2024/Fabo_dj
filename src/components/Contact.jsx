import { FaWhatsapp } from "react-icons/fa";

function Contact() {
    return (
    <section className="contact" id="contacto">
        <div className="container contact-content">
        <h2>¿Listo para animar tu evento?</h2>
        <p>Cotiza sin compromiso y reserva tu fecha con FABO DJ.</p>

        <a 
            href="https://wa.me/593995612680"
            className="btn-whatsapp"
            target="_blank"
        >
            <FaWhatsapp />
            Escribir por WhatsApp
        </a>
        </div>
    </section>
    );
}

export default Contact;