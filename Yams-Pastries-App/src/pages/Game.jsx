import PresentationRegles from "../components/PresentationRegles";
import Dice from "../components/Dice";
import GameDisplay from "../components/GameDisplay";
import "./Game.css";

function Game() {
  
  return (
    <>
      <PresentationRegles />
      <Dice />
      <GameDisplay />
    </>
  );
}

export default Game;
