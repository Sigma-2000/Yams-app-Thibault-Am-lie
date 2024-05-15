import PropTypes from 'prop-types';
import "./Dice.css" 

function Dice({values}) {
    return (
      <div className="dice-container">
        {values.map((value, index) => (
          <div key={index} className="die">{value}</div>
        ))}
      </div>
    )
}

Dice.propTypes = {
  values: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string, 
    PropTypes.number  
  ])).isRequired
}

export default Dice;