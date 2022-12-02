import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Devices from "./devices";

function Room(props) {
  const params = useParams();

const componente =  (props.room.name ===  params.roomName ? <Devices devices = {props.room.devices}></Devices> : null)
 return (
   <div>
       <div>
    <Card style={{ width: "18rem", height: "15rem" }} className="mb-3">
    <Card.Body>
       <Card.Title>
          <Link to={"/spaces/" + params.spaceId + "/rooms/" + props.room.name}>
            {props.room.name}
          </Link>
       </Card.Title>
     <Card.Img
       style={{ height: "10rem" }}
       variant="bottom"
       src= "https://demascotas.info/wp-content/uploads/2018/09/pet_animal_puppy_beagle_mammals_dog_cute_look-1205494.jpg"
       alt={props.room.name}
     />
    </Card.Body>
   </Card>
    </div>
    {componente}
   </div>

 );
}

export default Room;