import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Bands from "./components/bands";
import NavBar from "./components/navBar";

function App() {
 return (
   <div className="App">
        <NavBar></NavBar>
          <BrowserRouter>
       <Routes>
         <Route path="/" element={<Bands />} />
         <Route path="/bands" element={<Bands />} />
         <Route path="/bands/:bandName" element={<Bands />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;