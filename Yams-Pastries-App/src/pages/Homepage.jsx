import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../Homepage.css";
import "../index.css";

function Homepage() {
  return (
    <>
      <Navbar />
      <section>
        <p>
          Préparez-vous à savourer chaque victoire avec notre jeu de yams où
          chaque lancer de dés vous rapproche d'une délicieuse sélection de
          pâtisseries artisanales. Êtes-vous prêt à déguster le succès ?
        </p>
      </section>
      <div>
        <button>
          <Link to="/game">Découvrez le jeu</Link>
        </button>
      </div>
    </>
  );
}

export default Homepage;
