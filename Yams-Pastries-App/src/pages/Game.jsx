import PresentationRegles from "../components/PresentationRegles";
import Dice from "../components/Dice";
import { useState } from "react";
import { rollNewDiceValues } from "../services/utilsGame"
import "./Game.css";

function Game() {
  const [diceValues, setDiceValues] = useState(["?", "?", "?", "?", "?"]);
//créer store pour gérer état ! 

  const rollDice = () => {
    const newValues = rollNewDiceValues(diceValues);
    setDiceValues(newValues);
  };
  

  return (
    <>
      <p>ici nav bar et bannière</p>
      <PresentationRegles />
      <Dice values={diceValues} />
      <button onClick={rollDice}>Jouer, il vous reste essais</button>
    </>
  );
}

export default Game;
