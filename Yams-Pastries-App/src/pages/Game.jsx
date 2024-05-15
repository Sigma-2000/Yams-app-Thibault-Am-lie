import PresentationRegles from "../components/PresentationRegles";
import Dice from "../components/Dice";
import { useDispatch, useSelector } from "react-redux";
import { rollDice } from "../features/diceFeature/diceReducer";
import "./Game.css";

function Game() {
  const dispatch = useDispatch();
  const { trials, gameActive, hasWon, message } = useSelector((state) => state.dice);

  const handleRollDice = () => {
    dispatch(rollDice());
  };
  const messageClass = hasWon ? "message-win" : "message-loose";

  const buttonText = gameActive
    ? `Jouer, il vous reste ${trials} essais`
    : hasWon
    ? "Vous avez gagné!"
    : "Plus d'essais";
    

  return (
    <>
      <p>ici nav bar et bannière</p>
      <PresentationRegles />
      <Dice />
      <div className={messageClass}>{message}</div>
      <button
        onClick={handleRollDice}
        disabled={!gameActive}
        className={!gameActive ? "button-disabled" : ""}
      >
        {buttonText}
      </button>
    </>
  );
}

export default Game;
