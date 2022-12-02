import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Rooms from "./components/rooms";
import Spaces from "./components/spaces";

function App() {
 return (
   <div className="App">
          <BrowserRouter>
       <Routes>
         <Route path="/" element={<Spaces />} />
         <Route path="/spaces" element={<Spaces />} />
         <Route path="/spaces/:spaceId" element={<Rooms />} />
         <Route path="/spaces/:spaceId/rooms/:roomName" element={<Rooms />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;