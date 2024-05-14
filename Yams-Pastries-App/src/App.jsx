import './App.css'
import {Routes, Route} from "react-router-dom"
import Homepage from './pages/Homepage'
import Admin from './pages/Admin'
import Game from './pages/Game'

function App() {
  
  return (
    <>
      <Routes>
                <Route path={'/'} element={<Homepage/>}/>
                <Route path="/game" element={<Game />} />
                <Route path={'/admin'} element={<Admin/>}/>
                <Route path={'*'} element={<div>Oups cette page n'existe pas</div>} />
            </Routes>
      
    </>
  )
}

export default App
