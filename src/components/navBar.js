import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FormattedMessage } from "react-intl";

function NavBar() {
 return (
   <>
     <Navbar bg="dark" variant="dark">
       <Container>
         <Navbar.Brand href="/bands"><FormattedMessage id = "title"/></Navbar.Brand>
       </Container>
     </Navbar>
   </>
 );
}

export default NavBar;