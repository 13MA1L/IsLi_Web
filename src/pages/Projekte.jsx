const imageModules = import.meta.glob("../assets/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

const projectImages = Object.entries(imageModules)
  .filter(([path]) => !path.includes("IsLiGmbH"))
  .map(([path, src], index) => ({
    src,
    type: index % 3 === 0 ? "Bad & Dusche" : index % 3 === 1 ? "Bodenplatten" : "Wandplatten",
  }));

export default function Projekte() {
  return (
    <main className="pageContent">
      <p className="eyebrow">Referenzen</p>
      <h1>Fertige Arbeiten</h1>
      <p className="lead">
        Ein Einblick in unsere ausgeführten Plattenarbeiten. Präzision,
        saubere Verarbeitung und hochwertige Ergebnisse stehen bei jedem
        Projekt im Mittelpunkt.
      </p>

      <section className="projectGrid">
        {projectImages.map((project) => (
          <article className="projectCard" key={project.src}>
            <img src={project.src} alt={project.title} />

            <div className="projectOverlay">
              <span>{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}