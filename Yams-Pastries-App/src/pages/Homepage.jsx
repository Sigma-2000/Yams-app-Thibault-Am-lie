import { Link } from "react-router-dom";
import "./Homepage.css";
import { useGetAllPastriesQuery } from "../features/pastriesFeature/pastriesReducer";
import PastryCard from "../components/PastryCard";

function Homepage() {
  const { data, error, isLoading } = useGetAllPastriesQuery();

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
      <h2>Les lots à gagner</h2>
      <section>
        {error ? (
          <h5>Oh no, there was an error 😢 {error.message}</h5>
        ) : isLoading ? (
          <h5>Loading...</h5>
        ) : data ? (
          data.map((pastry) => {
          return <PastryCard imgUrl={pastry.image} name={pastry.name} quantity={pastry.quantity} key={pastry.id}/>;
          })
        ) : null}
      </section>
    </>
  );
}

export default Homepage;
