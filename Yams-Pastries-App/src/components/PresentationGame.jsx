import { useGetAllPastriesQuery } from "../features/pastriesFeature/pastriesReducer";
import { Link } from "react-router-dom";

function PresentationGame() {
  const { data, error, isLoading } = useGetAllPastriesQuery();

  return (
    <>
      <div className="container">
        <div className="phrase-accroche">
          <p>
            Préparez-vous à savourer chaque victoire avec notre jeu de yams où
            chaque lancer de dés vous rapproche d'une délicieuse sélection de
            pâtisseries artisanales. Êtes-vous prêt à déguster le succès ?
          </p>
        </div>
      </div>
      <div className="button-container">
        <button>
          <Link to="/game">Découvrez le jeu</Link>
        </button>
      </div>
      <h2>Les lots à gagner</h2>
      <div className="container">
        <div className="lot-to-win">
      <ul>
        {error ? (
          <h5>Oh no, there was an error 😢 {error.message}</h5>
        ) : isLoading ? (
          <h5>Loading...</h5>
        ) : data ? (
          data.map((pastry) => {
            return (
              <li key={pastry.id}>
                {pastry.name} / quantité : {pastry.quantity}
              </li>
            );
          })
        ) : null}
      </ul>
        </div>
      </div>
    </>
  );
}

export default PresentationGame;
