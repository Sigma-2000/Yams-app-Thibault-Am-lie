import { useGetAllPastriesQuery } from "../features/pastriesFeature/pastriesReducer";
import './Pastries.css'

function Pastries() {
  const { data, error, isLoading } = useGetAllPastriesQuery();
 
  console.log(data);


  return (
    <div className="section-pastries">
      <div className="pastries-content">
        <h3>Dashboard</h3>
        <ul>
          {error ? (
            <h5>Oh no, there was an error 😢 {error.message}</h5>
          ) : isLoading ? (
            <h5>Loading...</h5>
          ) : data ? (
            data.map((pastry) => {
              return (
                <li key={pastry.id}>
                  {pastry.name} / quantité : {pastry.quantity}
                  <button
                    className="button-green"
                    
                  >
                    +
                  </button>
                  <button
                    className="button-red"
                 
                  >
                    x
                  </button>
                </li>
              );
            })
          ) : null}
        </ul>
      </div>
    </div>
  );
}

export default Pastries;
