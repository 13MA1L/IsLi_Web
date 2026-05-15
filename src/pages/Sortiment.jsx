const tiles = [
  {
    name: "Keramikplatten",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    text: "Robust, pflegeleicht und vielseitig einsetzbar für Bad, Küche und Wohnräume.",
    usage: "Bad, Küche, Wand, Boden",
  },
  {
    name: "Feinsteinzeug",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    text: "Sehr widerstandsfähige Platten mit moderner Optik und hoher Lebensdauer.",
    usage: "Innen, Aussen, Terrasse",
  },
  {
    name: "Natursteinplatten",
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop",
    text: "Einzigartige Struktur, natürliche Farben und hochwertiger Charakter.",
    usage: "Wohnbereich, Bad, Treppen",
  },
  {
    name: "Marmorplatten",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    text: "Luxuriöse Oberfläche für elegante und exklusive Räume.",
    usage: "Bad, Wand, Designbereiche",
  },
  {
    name: "Granitplatten",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    text: "Extrem stabil, langlebig und ideal für stark beanspruchte Bereiche.",
    usage: "Boden, Treppen, Aussenbereich",
  },
  {
    name: "Grossformatplatten",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    text: "Moderne, fugenarme Optik für ein besonders hochwertiges Raumgefühl.",
    usage: "Bad, Dusche, Wohnbereich",
  },
  {
    name: "Mosaikplatten",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200&auto=format&fit=crop",
    text: "Perfekt für kreative Details, Akzente und individuelle Gestaltung.",
    usage: "Dusche, Wand, Dekor",
  },
  {
    name: "Terrassenplatten",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
    text: "Rutschhemmend, wetterfest und ideal für Aussenflächen.",
    usage: "Terrasse, Balkon, Garten",
  },
  {
    name: "Betonoptik-Platten",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop",
    text: "Minimalistisch, modern und perfekt für industrielle Designs.",
    usage: "Wohnbereich, Küche, Gewerbe",
  },
  {
    name: "Holzoptik-Platten",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    text: "Warme Holzoptik kombiniert mit der Pflegeleichtigkeit von Platten.",
    usage: "Bad, Wohnzimmer, Terrasse",
  },
  {
    name: "Beige Designplatten",
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1200&auto=format&fit=crop",
    text: "Helle, warme Farbtöne für ruhige und elegante Räume.",
    usage: "Bad, Boden, Wand",
  },
  {
    name: "Schwarze Platten",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200&auto=format&fit=crop",
    text: "Starke, moderne Optik für exklusive und kontrastreiche Räume.",
    usage: "Bad, Küche, Akzentwände",
  },
];

export default function Sortiment() {
  return (
    <main className="pageContent">
      <p className="eyebrow">Sortiment</p>
      <h1>Plattenarten für jeden Stil</h1>
      <p className="lead">
        Wir verkaufen alle Platten, die der Kunde wünscht. Von Keramik über
        Naturstein bis zu modernen Grossformatplatten beraten wir Sie passend
        zu Ihrem Projekt.
      </p>

      <section className="sortimentGrid">
        {tiles.map((tile) => (
          <article className="tileProductCard" key={tile.name}>
            <img src={tile.image} alt={tile.name} />
            <div>
              <h3>{tile.name}</h3>
              <p>{tile.text}</p>
              <span>{tile.usage}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}