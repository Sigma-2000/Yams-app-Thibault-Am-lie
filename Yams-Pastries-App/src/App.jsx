import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Admin from "./pages/Admin";
import Game from "./pages/Game";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path="/game" element={<Game />} />
        <Route path={"/admin"} element={<Admin />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"*"} element={<div>Oups cette page n'existe pas</div>} />
      </Routes>
    </>
  );
}

export default App;
