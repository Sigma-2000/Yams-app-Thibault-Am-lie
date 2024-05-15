import { useSelector } from "react-redux";
import "./Dice.css";

function Dice() {
  const values = useSelector((state) => state.dice.diceValues);
  return (
    <div className="dice-container">
      {values.map((value, index) => (
        <div key={index} className="die">
          {value}
        </div>
      ))}
    </div>
  );
}

export default Dice;
