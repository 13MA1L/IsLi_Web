import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TileScene from "../components/TileScene.jsx";

const services = [
  {
    title: "Bodenplatten",
    text: "Hochwertige Bodenplatten für Wohnräume, Küchen und Gewerbeflächen.",
  },
  {
    title: "Wandplatten",
    text: "Saubere Wandverlegung mit präzisem Fugenbild und modernem Design.",
  },
  {
    title: "Badsanierungen",
    text: "Komplette Lösungen für Badezimmer, Duschen und Nasszellen.",
  },
  {
    title: "Küchenplatten",
    text: "Pflegeleichte und langlebige Plattenlösungen für moderne Küchen.",
  },
  {
    title: "Terrassenplatten",
    text: "Wetterfeste und robuste Platten für Terrasse und Balkon.",
  },
  {
    title: "Naturstein & Marmor",
    text: "Exklusive Materialien mit hochwertiger und zeitloser Optik.",
  },
  {
    title: "Mosaikarbeiten",
    text: "Kreative Designs und exakte Verarbeitung für besondere Details.",
  },
  {
    title: "Fugen & Reparaturen",
    text: "Professionelle Reparaturen und Erneuerungen bestehender Flächen.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}

      <section className="hero">
        <div className="heroText">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Seit über 20 Jahren
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Präzise Plattenarbeiten für moderne Räume
          </motion.h1>

          <motion.p
            className="heroDesc"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            IsLi GmbH steht für professionelle Plattenarbeiten,
            höchste Präzision und schnelle Umsetzung.
            Von der Beratung bis zur perfekten Verlegung.
          </motion.p>

          <motion.div
            className="heroBtns"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Link to="/kontakt" className="primaryBtn">
              Offerte anfragen
            </Link>

            <a href="#leistungen" className="ghostBtn">
              Leistungen ansehen
            </a>
          </motion.div>
        </div>

        <div className="canvasWrap">
          <TileScene />
        </div>
      </section>

      {/* STATS */}

      <section className="stats">
        <div>
          <h2>20+</h2>
          <p>Jahre Erfahrung</p>
        </div>

        <div>
          <h2>100%</h2>
          <p>Präzision</p>
        </div>

        <div>
          <h2>360°</h2>
          <p>Service rund um Platten</p>
        </div>
      </section>

      {/* LEISTUNGEN */}

      <section id="leistungen" className="homeServices">
        <div className="homeServicesHeader">
          <p className="eyebrow">Unsere Leistungen</p>

          <h2>Alles rund um Plattenarbeiten</h2>

          <p>
            Wir übernehmen sämtliche Plattenarbeiten für Neubau,
            Umbau und Renovationen. Schnell, sauber und mit
            höchster Präzision.
          </p>
        </div>

        <div className="cards">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ÜBER UNS */}

      <section className="aboutHome">
        <div>
          <p className="eyebrow">Über uns</p>

          <h2>
            20 Jahre Erfahrung.
            <br />
            Ein Ziel: perfekte Arbeit.
          </h2>

          <p>
            IsLi GmbH steht für Präzision, Qualität und professionelle
            Plattenarbeiten. Unsere Arbeit soll nicht nur gut aussehen,
            sondern langfristig überzeugen.
          </p>
        </div>

        <div className="aboutGrid">
          <div>
            <h3>Präzision</h3>

            <p>
              Exakte Schnitte, saubere Fugen und hochwertige Verarbeitung
              bis ins kleinste Detail.
            </p>
          </div>

          <div>
            <h3>Schnelligkeit</h3>

            <p>
              Effiziente Umsetzung Ihrer Projekte ohne Kompromisse
              bei der Qualität.
            </p>
          </div>

          <div>
            <h3>Erfahrung</h3>

            <p>
              Über 20 Jahre Erfahrung im Bereich Plattenarbeiten,
              Sanierungen und Verlegung.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="homeCta">
        <div>
          <p className="eyebrow">Plattenverkauf</p>

          <h2>Wir verkaufen auch Ihre Wunschplatten</h2>

          <p>
            Wir helfen Ihnen bei der Auswahl und liefern
            passende Platten für jedes Projekt.
          </p>
        </div>

        <Link to="/sortiment" className="primaryBtn">
          Sortiment ansehen
        </Link>
      </section>
    </main>
  );
}