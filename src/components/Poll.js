import React from "react";
import Button from "react-bootstrap/Button";

export default function Poll(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.proverbsId}</td>
        <td>{props.englishMean}</td>
        <td>{props.turkishMean}</td>
        <td>
          <Button variant="primary">Sil</Button>
        </td>
        <td>
          <Button variant="primary">Güncelle</Button>
        </td>
      </tr>
    </React.Fragment>
  );
}
