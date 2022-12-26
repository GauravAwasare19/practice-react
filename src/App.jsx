import {BrowserRouter, Route,Routes} from "react-router-dom"
import './App.css'
import './Header.css'
import Header from "./Header"
import Home from "./Home"

function App() {
  
  return (
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path="/" element={<Home/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
