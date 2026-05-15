import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "./assets/IsLiGmbH.png";
import "./styles.css";

function Tile3D({ position, rotation, color = "#ffffff" }) {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.5}>
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[1.7, 0.08, 2.4]} />
        <meshStandardMaterial
          color={color}
          metalness={0.35}
          roughness={0.18}
        />
      </mesh>
    </Float>
  );
}

function TileScene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 5, 6]} intensity={3} />
      <pointLight position={[-5, 3, 4]} intensity={3} color="#ff1f1f" />

      <Tile3D position={[-2.5, 0.6, 0]} rotation={[0.4, 0.4, 0.2]} />
      <Tile3D position={[0, -0.2, -0.3]} rotation={[0.1, -0.5, 0.1]} color="#ff1f1f" />
      <Tile3D position={[2.5, 0.4, 0]} rotation={[-0.3, 0.5, -0.2]} />
      <Tile3D position={[1.1, 1.6, -1]} rotation={[0.5, 0.2, 0.5]} color="#222" />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
    </>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  const services = [
    "Bodenplatten",
    "Wandplatten",
    "Badsanierungen",
    "Terrassen",
    "Naturstein",
    "Mosaik",
  ];

  return (
    <div className="app">
      <div className="cursorGlow" />

      <header className="navbar">
        <img src={logo} className="logo" alt="IsLi GmbH Logo" />

        <button className="menuBtn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={open ? "nav open" : "nav"}>
          <a href="#home">Home</a>
          <a href="#leistungen">Leistungen</a>
          <a href="#platten">Platten</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="heroText">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Seit über 20 Jahren
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Plattenarbeiten
            <span> in 3D Präzision</span>
          </motion.h1>

          <motion.p
            className="heroDesc"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Schnelle, saubere und präzise Plattenlegerarbeiten für Bad,
            Küche, Wohnbereich und Terrasse. Wir verkaufen und verlegen alle
            Plattenarten nach Wunsch.
          </motion.p>

          <motion.div
            className="heroBtns"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <a href="#kontakt" className="primaryBtn">Offerte anfragen</a>
            <a href="#leistungen" className="ghostBtn">Leistungen ansehen</a>
          </motion.div>
        </div>

        <div className="canvasWrap">
          <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
            <TileScene />
          </Canvas>
        </div>
      </section>

      <section className="stats">
        <div><h2>20+</h2><p>Jahre Erfahrung</p></div>
        <div><h2>100%</h2><p>Präzision</p></div>
        <div><h2>360°</h2><p>Rundum Service</p></div>
      </section>

      <section id="leistungen" className="section">
        <p className="sectionTag">Leistungen</p>
        <h2>Alles rund um Plattenarbeiten</h2>

        <div className="cards">
          {services.map((item, index) => (
            <motion.div
              className="card"
              key={item}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, rotateX: 6, rotateY: -6 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <span>0{index + 1}</span>
              <h3>{item}</h3>
              <p>
                Hochwertige Ausführung mit sauberer Planung, exakten Schnitten
                und langlebigem Ergebnis.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="platten" className="platten">
        <div>
          <p className="sectionTag">Plattenverkauf</p>
          <h2>Wir liefern Ihre Wunschplatten</h2>
          <p>
            Keramik, Naturstein, Feinsteinzeug, Marmor, Granit,
            Grossformatplatten und moderne Designplatten.
          </p>
        </div>

        <div className="glassBox">
          <h3>Beratung inklusive</h3>
          <p>
            Wir helfen bei Material, Farbe, Format, Oberfläche und Stil.
          </p>
          <a href="#kontakt" className="primaryBtn">Platten anfragen</a>
        </div>
      </section>

      <section className="premium">
        <h2>Präzision. Tempo. Qualität.</h2>
        <p>
          Moderne Handwerksarbeit für Räume, die hochwertig aussehen und lange
          halten.
        </p>
      </section>

      <section id="kontakt" className="contact">
        <div>
          <p className="sectionTag">Kontakt</p>
          <h2>Starten wir Ihr Projekt</h2>
          <p>Kontaktieren Sie uns für Beratung, Verkauf oder Verlegung.</p>
        </div>

        <form>
          <input placeholder="Name" />
          <input placeholder="E-Mail" />
          <input placeholder="Telefon" />
          <textarea placeholder="Projekt beschreiben"></textarea>
          <button>Anfrage senden</button>
        </form>
      </section>
    </div>
  );
}