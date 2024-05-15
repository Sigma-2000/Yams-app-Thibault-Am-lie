import "./PresentationRegles.css";

function PresentationRegles() {
  return (
    <>
      <div className="regles-container">
        <p>
          Vous pouvez lancer les dés jusqu'à trois fois pour tenter d'obtenir
          une combinaison gagnante :
        </p>
        <ul>
          <li>
            Si vous obtenez une paire (deux dés identiques), vous gagnez une
            pâtisserie.
          </li>
          <li>
            Avec un brelan (trois dés identiques), vous gagnez deux pâtisseries.
          </li>
          <li>
            Avec un carré (quatre dés identiques), jackpot ! Vous gagnez trois
            pâtisseries.
          </li>
        </ul>
        <p>Si vous gagnez, vous ne pourrez bien sur pas rejouer.</p>
      </div>
    </>
  );
}

export default PresentationRegles;
