import Space from "./space";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { useEffect, useState } = require("react");

function Spaces (props) {

   const [spaces, setSpaces] = useState([]);
   useEffect(()=>{
       const URL = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
       fetch(URL).then(data => data.json()).then(data => {
           setSpaces(data);
       })
   }, []);

   return(
       <div className="container">
           <h1>Listado de spaces</h1>
           <hr></hr>
           <Row>
               {spaces.map(space => <Col><Space space={space} key={space.id}/></Col>)}               
           </Row>
          
       </div>
   )
}

export default Spaces;