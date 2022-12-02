import Room from "./room";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Device from "./device";

const clase = navigator.language === 'en' ?  'table table-dark': 'table'

function Devices(props) {
    
    return (
        <div>
            <table className={clase}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                            ID
                        </th>
                        <th scope="col">
                           Device
                        </th>
                        <th scope="col">
                            Value
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {console.log("Offers", props.devices)}
                    {props.devices.map((e, i) => (
                        <Device key={i} device={e} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Devices;