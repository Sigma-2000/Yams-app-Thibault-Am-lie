import Pastries from "../components/Pastries"
import PastryForm from "../components/PastryForm";
import './Dashboard.css';

function Dashboard() {
 
  return (
    <div className="dashboard">
     
      <div className="dashboard-content">
        <Pastries/>
        <PastryForm/>
      </div>
    </div>
  );
}


export default Dashboard;