import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Band from "./band";
import { FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural } from 'react-intl';

const clase = navigator.language === 'en' ?  'table table-dark': 'table'


const { useEffect, useState } = require("react");

function Bands(props) {
    
    const [bands, setBands] = useState([]);
    useEffect(()=>{
        const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL).then(data => data.json()).then(data => {
            setBands(data);
        })
    }, []);
    const [masVieja, setVieja] = useState({});
    useEffect(()=>{
        const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
        fetch(URL).then(data => data.json()).then(data => {
            setVieja(data.reduce((p, c) => p.foundation_year < c.foundation_year ? p : c));
        })
    }, []);
    return (
        <div>
            <table className={clase}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">
                        <FormattedMessage id = "name"/>
                        </th>
                        <th scope="col">
                           <FormattedMessage id = "country"/>
                        </th>
                        <th scope="col">
                        <FormattedMessage id = "genre"/>
                        </th>
                        <th scope="col">
                        <FormattedMessage id = "foundation"/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {console.log("Bandas", bands)}
                    {bands.map((e, i) => (
                        <Band key={i} band={e} />
                    ))}
                </tbody>
            </table>
            <p><FormattedMessage id = "mensaje0"/> {masVieja.name} <FormattedMessage id = "mensaje1"/> {2022- masVieja.foundation_year}  <FormattedMessage id = "mensaje2"/> </p>
                        
        </div>

    )
}

export default Bands;