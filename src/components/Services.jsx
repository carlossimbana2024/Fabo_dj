import { FaMusic, FaMicrophoneAlt, FaLightbulb, FaCloud, FaFireAlt } from "react-icons/fa";

function Services() {
    const services = [
    { icon: <FaMusic />, title: "DJ profesional" },
    { icon: <FaLightbulb />, title: "Amplificación e iluminación" },
    { icon: <FaMicrophoneAlt />, title: "Animador / maestro de ceremonias" },
    { icon: <FaFireAlt />, title: "Pirotecnia fría" },
    { icon: <FaCloud />, title: "Máquinas de humo y efectos" },
    ];

    return (
    <section className="section" id="servicios">
        <div className="container">
        <p className="section-tag">Lo que ofrecemos</p>
        <h2 className="section-title">Servicios para tu evento</h2>

        <div className="cards-grid">
            {services.map((service, index) => (
            <article className="card" key={index}>
                <div className="card-icon">{service.icon}</div>
                <h3>{service.title}</h3>
            </article>
            ))}
        </div>
        </div>
    </section>
    );
}

export default Services;