import './App.css'
import { NavBar } from './components/NavBar'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaOrdenes } from './components/Ordenes/ListaOrdenes';
import { CreacionOrdenes } from './components/Ordenes/CreacionOrdenes';
import { ActualizacionOrdenes } from './components/Ordenes/ActualizacionOrdenes';


function App() {
 
  
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element= {<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/listaOrdenes" element={<ListaOrdenes />} />
          <Route path="/creacionOrdenes" element={<CreacionOrdenes />} />
          <Route path="/actualizacionOrdenes/:id" element={<ActualizacionOrdenes />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
