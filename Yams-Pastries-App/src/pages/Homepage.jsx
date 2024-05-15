import { Link } from "react-router-dom";
import "./Homepage.css";
import {useGetAllPastriesQuery} from '../features/pastriesFeature/pastriesReducer'

function Homepage() {
  const { data, error, isLoading } = useGetAllPastriesQuery()
  console.log(data);
  return (
    <>
    <div className="container">
      <section>
        <p>
          Préparez-vous à savourer chaque victoire avec notre jeu de yams où
          chaque lancer de dés vous rapproche d'une délicieuse sélection de
          pâtisseries artisanales. Êtes-vous prêt à déguster le succès ?
        </p>
      </section>
    </div>
      <div>
        <button>
          <Link to="/game">Découvrez le jeu</Link>
        </button>
      </div>
    </>
  );
}

export default Homepage;
