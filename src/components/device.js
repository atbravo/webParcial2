import React from "react";

const Device = (props) => {
  return (
    <tr>
      <th scope="row">{props.key}</th>
      <th scope="row">{props.device.id}</th>
      <td>{props.device.name}</td>
      <td>{props.device.desired.value}</td>
    </tr>
  );
};

export default Device;