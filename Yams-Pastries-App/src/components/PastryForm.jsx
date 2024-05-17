import "./PastryForm.css";
import { useState } from "react";
import {useAddPastryMutation} from "../features/crudFeature/crudReducer"

const PastryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    image: "",
  });

  const [addPastry, { isLoading }] = useAddPastryMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPastry(formData);
      setFormData({ name: "", quantity: "", image: "" });
    } catch (error) {
      console.error("Erreur dans l'envoi des données", error);
    }
  };

  return (
    <div className="container-pastry">
      <h3>Ajout de nouveau produit</h3>
      <form method="post" className="form-group" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom de la pâtisserie :</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantité :</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image :</label>
          <input
            type="text"
            name="image"
            id="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" disabled={isLoading}>
            Ajouter une pâtisserie
          </button>
        </div>
      </form>
    </div>
  );
};

export default PastryForm;