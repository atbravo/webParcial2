import React from "react";
import { Link } from "react-router-dom";
import BandDetail from "./bandDetail";
import { useParams } from "react-router-dom";

const Band = (props) => {
    const params = useParams();
const componente =  (props.band.name ===  params.bandName ? <BandDetail band = {props.band}></BandDetail> : null)
  return ([
    <div>
    {componente}
    </div>,
    <tr>
      <th scope="row">{props.key}</th>
      <th scope="row">
         <Link to={"/bands/" + props.band.name}>
                 {props.band.name}
          </Link>
    </th>
      <td>{props.band.country}</td>
      <td>{props.band.genre}</td>
      <td>{props.band.foundation_year}</td>
    </tr>
  ]);
};

export default Band;