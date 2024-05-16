import PresentationRegles from "../components/PresentationRegles";
import Dice from "../components/Dice";
import { useDispatch, useSelector } from "react-redux";
import { rollDice } from "../features/diceFeature/diceReducer";
import "./Game.css";
import { useGetAllPastriesQuery } from "../features/pastriesFeature/pastriesReducer";
import { useEffect, useState } from "react";

function Game() {
  const dispatch = useDispatch();
  const { trials, gameActive, hasWon, message, prizeQuantity } = useSelector(
    (state) => state.dice
  );
  const { data } = useGetAllPastriesQuery();
  const [prizeMessage, setPrizeMessage] = useState(''); 

  const handleRollDice = () => {
    dispatch(rollDice());
  };

  useEffect(() => {
    if (hasWon && prizeQuantity > 0 && data) {
      const availablePastries = [...data].filter((pastries) => pastries.quantity > 0);
      if (availablePastries.length >= prizeQuantity) {
        const randomPrizes = [...availablePastries]
          .sort(() => 0.5 - Math.random())
          .slice(0, prizeQuantity);
          const newPrizeMessage = `Venez nous reclamer : ${randomPrizes.map(pastries => pastries.name).join(' et ')}`;
          setPrizeMessage(newPrizeMessage);
      } else{
        setPrizeMessage("Pas assez de pâtisseries disponibles pour attribuer les prix. Veuillez nous excuser");
      }
    }
  }, [hasWon, prizeQuantity, data]);

  const messageClass = hasWon ? "message-win" : "message-loose";

  const buttonText = gameActive
    ? `Jouer, il vous reste ${trials} essais`
    : hasWon
    ? "Vous avez gagné!"
    : "Plus d'essais";

  return (
    <>
      <PresentationRegles />
      <Dice />
      <div className={messageClass}>{message}</div>
      <div>{prizeMessage}</div>
      <div className="button-container">
      <button
        onClick={handleRollDice}
        disabled={!gameActive}
        className={!gameActive ? "button-disabled" : ""}
      >
        {buttonText}
      </button>
      </div>
    </>
  );
}

export default Game;
