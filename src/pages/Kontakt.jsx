export default function Kontakt() {
  return (
    <main className="pageContent contactPage">
      <div>
        <p className="eyebrow">Kontakt</p>
        <h1>Starten wir Ihr Projekt</h1>
        <p className="lead">
          Kontaktieren Sie uns für Beratung, Plattenverkauf oder eine
          unverbindliche Offerte.
        </p>

        <div className="contactDetails">
          <div>
            <strong>Ansprechpartner</strong>
            <span>Burim Ziberi</span>
          </div>

          <div>
            <strong>E-Mail</strong>
            <a href="mailto:info@isli.ch">info@isli.ch</a>
          </div>

          <div>
            <strong>Telefon</strong>
            <a href="tel:+41798294251">079 829 42 51</a>
          </div>

          <div>
            <strong>Adresse</strong>
            <span>Wintermoosstrasse 4, 8583 Sulgen</span>
          </div>

          <div>
            <strong>Öffnungszeiten</strong>
            <span>Mo–Fr: 08:00 – 20:00</span>
            <span>Sa: 08:00 – 17:00</span>
          </div>
        </div>
      </div>

      <form className="contactForm">
        <input placeholder="Name" />
        <input placeholder="E-Mail" />
        <input placeholder="Telefon" />
        <textarea placeholder="Projekt beschreiben"></textarea>
        <button type="submit">Anfrage senden</button>
      </form>
    </main>
  );
}