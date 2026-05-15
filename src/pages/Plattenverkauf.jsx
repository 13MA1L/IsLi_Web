const products = [
  "Keramikplatten",
  "Feinsteinzeug",
  "Natursteinplatten",
  "Marmor",
  "Granit",
  "Beige Designplatten",
  "Grossformatplatten",
  "Terrassenplatten",
];

export default function Plattenverkauf() {
  return (
    <main className="pageContent splitPage">
      <div>
        <p className="eyebrow">Plattenverkauf</p>
        <h1>Wir liefern Ihre Wunschplatten</h1>
        <p className="lead">
          Ob weiss, grau, beige, schwarz, modern oder klassisch — wir verkaufen
          alle Plattenarten, die zu Ihrem Projekt passen.
        </p>

        <div className="tags">
          {products.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="infoBox">
        <h2>Beratung inklusive</h2>
        <p>
          Wir helfen bei Material, Farbe, Format, Oberfläche und Stil. So erhalten
          Sie genau die Platten, die optisch und technisch passen.
        </p>
      </div>
    </main>
  );
}