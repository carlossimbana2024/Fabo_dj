import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
    return (
    <a
        href="https://wa.me/593995612680"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
    >
        <FaWhatsapp />
    </a>
    );
}

export default WhatsAppButton;
