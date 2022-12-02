import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Space(props) {
 return (
   <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src= "https://demascotas.info/wp-content/uploads/2018/09/pet_animal_puppy_beagle_mammals_dog_cute_look-1205494.jpg"
       alt={props.space.name}
     />
     <Card.Body>
        
    <Card.Title>
        <Link to={"/spaces/" + props.space.id}>
            {props.space.name}
        </Link>
    </Card.Title>
       <Card.Text>{props.space.address}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default Space;