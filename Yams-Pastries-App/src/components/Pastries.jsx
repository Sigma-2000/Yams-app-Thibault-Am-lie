import { useGetAllPastriesQuery } from "../features/pastriesFeature/pastriesReducer";
import { useAddQuantityMutation, useDeletePastryMutation } from "../features/crudFeature/crudReducer"; 
import "./Pastries.css";
import { useEffect, useState } from "react";

function Pastries() {
  const { data, error, isLoading } = useGetAllPastriesQuery();
  const [pastries, setPastries] = useState([]);
  const [addQuantity] = useAddQuantityMutation();
  const [deletePastry] = useDeletePastryMutation();

  useEffect(() => {
    if (data) {
      setPastries(data);
    }
  }, [data]);

  const incrementQuantity = async (id) => {
    const updatedPastries = pastries.map((pastry) => {
      if (pastry.id === id) {
        return { ...pastry, quantity: pastry.quantity + 1 };
      }
      return pastry;
    });
    setPastries(updatedPastries);
    console.log(typeof id);
    const newQuantity = updatedPastries.find(
      (pastry) => pastry.id === id
    ).quantity;
    console.log("Updating pastry ID:", id, "to new quantity:", newQuantity);

    try {
      const response = await addQuantity({ id, quantity: newQuantity });
      console.log("Response from server:", response);
    } catch (err) {
      console.error("Failed to increment quantity:", err);
    }
  };

  const decrementQuantity = async (id) => {
    const updatedPastries = pastries.filter((pastry) => pastry.id !== id);
    setPastries(updatedPastries);

    try {
      const response = await deletePastry(id);
      console.log("Response from server:", response);
    } catch (err) {
      console.error("Failed to delete pastry:", err);
    }
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
