import Room from "./room";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";

const { useEffect, useState } = require("react");

function Rooms (props) {
    const params = useParams();
   const [rooms, setRooms] = useState([]);
   useEffect(()=>{
       const URL = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
       fetch(URL).then(data => data.json()).then(data => {
           setRooms(data.filter(m=>m.homeId === params.spaceId));
       })
   }, []);
   
   return(
       <div className="container">
           <h1>Listado de rooms</h1>
           <hr></hr>
           <Row>
               {rooms.map(room => <Col><Room room={room} key={room.id}/></Col>)}               
           </Row>
          
       </div>
   )
}

export default Rooms;