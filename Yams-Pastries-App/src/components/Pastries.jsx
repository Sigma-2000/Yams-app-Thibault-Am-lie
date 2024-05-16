import { useGetAllPastriesQuery } from "../features/pastriesFeature/pastriesReducer";
import "./Pastries.css";
import { useEffect, useState } from "react";

function Pastries() {
  const { data, error, isLoading } = useGetAllPastriesQuery();
  const [pastries, setPastries] = useState([]);

  useEffect(() => {
    if (data) {
      setPastries(data);
    }
  }, [data]);

  const incrementQuantity = (id) => {
    const updatedPastries = pastries.map((pastry) => {
      if (pastry.id === id) {
        return { ...pastry, quantity: pastry.quantity + 1 };
      }
      return pastry;
    });
    setPastries(updatedPastries);
  };
  const decrementQuantity = (id) => {
    const updatedPastries = pastries.map((pastry) => {
      if (pastry.id === id && pastry.quantity > 0) {
        return { ...pastry, quantity: pastry.quantity - 1 };
      }
      return pastry;
    });
    setPastries(updatedPastries);
  };

  return (
    <div className="section-pastries">
      <div className="pastries-content">
        <h3>Dashboard</h3>
        <ul>
          {error ? (
            <h5>Oh no, there was an error 😢 {error.message}</h5>
          ) : isLoading ? (
            <h5>Loading...</h5>
          ) : pastries.length ? (
            pastries.map((pastry) => (
              <li key={pastry.id}>
                {pastry.name} / quantité : {pastry.quantity}
                <button
                  className="button-green"
                  onClick={() => incrementQuantity(pastry.id)}
                >
                  +
                </button>
                <button
                  className="button-red"
                  onClick={() => decrementQuantity(pastry.id)}
                >
                  x
                </button>
              </li>
            ))
          ) : null}
        </ul>
      </div>
    </div>
  );
}

export default Pastries;
