import './App.css'
import { NavBar } from './components/NavBar'
import { Login } from './components/Login'
import { Register } from './components/Register'


function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <Login/>
      <br />
      {/* <Register/> */}

    </div>
  )
}

export default App
