import PresentationRegles from "../components/PresentationRegles";
import Dice from "../components/Dice";
import { useDispatch, useSelector } from "react-redux";
import { rollDice } from "../features/diceFeature/diceReducer";
import "./Game.css";

function Game() {
  const dispatch = useDispatch();
  const { trials, gameActive } = useSelector((state) => state.dice);

  const handleRollDice = () => {
    dispatch(rollDice());
  };
//implémenter le message quand on gagne et le texte du bouton qui va changer
  return (
    <>
      <p>ici nav bar et bannière</p>
      <PresentationRegles />
      <Dice />
      <button onClick={handleRollDice} disabled={!gameActive}>
        Jouer, il vous reste {trials} essais
      </button>
    </>
  );
}

export default Game;
