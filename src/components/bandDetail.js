import Card from "react-bootstrap/Card";

function BandDetail(props) {
    
 return (
   <Card style={{ width: "18rem", height: "28rem" }} className="mb-3">
     <Card.Img
       style={{ height: "12rem" }}
       variant="top"
       src={props.band.image}
       alt={props.band.name}
     />
     <Card.Body>
       <Card.Text>{props.band.description}</Card.Text>
     </Card.Body>
   </Card>
 );
}

export default BandDetail;