import heroImg from "../assets/img/hero.png";

function Hero() {
    return (
    <section className="hero">
        <div className="hero-content container">
        <div className="hero-text">
            <p className="tag">Fiestas & Eventos</p>
            <h2>Haz que tu evento suene inolvidable</h2>
            <p>
            Servicio de DJ, animación, iluminación, efectos especiales y sonido
            profesional para todo tipo de eventos.
            </p>

            <a 
            href="https://wa.me/593995612680" 
            className="btn-primary"
            target="_blank"
            >
            Cotizar por WhatsApp
            </a>
        </div>

        <div className="hero-image">
            <img src={heroImg} alt="Fabo DJ en eventos" />
        </div>
        </div>
    </section>
    );
}

export default Hero;