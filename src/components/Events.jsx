function Events() {
    const events = [
    "Fiestas familiares",
    "Eventos empresariales",
    "Eventos corporativos",
    "Fiestas infantiles",
    "Impulsación de marcas",
    ];

    return (
    <section className="section events" id="eventos">
        <div className="container">
        <p className="section-tag">Dedicados a</p>
        <h2 className="section-title">Eventos que cubrimos</h2>

        <div className="events-list">
            {events.map((event, index) => (
            <span key={index}>{event}</span>
            ))}
        </div>
        </div>
    </section>
    );
}

export default Events;