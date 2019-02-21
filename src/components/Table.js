import React from 'react';
import { Button, Table as BSTable } from 'reactstrap';

function TableRow({
  InstanceId,
  InstanceType,
  KeyName,
  PublicIpAddress,
  State: { Code, Name },
  onClickStart,
  onClickStop,
}) {
  return (
    <tr>
      <td>{KeyName}</td>
      <td>{InstanceId}</td>
      <td>{InstanceType}</td>
      <td>{Name}</td>
      <td>{PublicIpAddress}</td>
      <td>
        <Button
          size="sm"
          disabled={Code !== 80}
          onClick={() => onClickStart(InstanceId)}
        >
          Start
        </Button>
      </td>
      <td>
        <Button
          size="sm"
          disabled={Code !== 16}
          onClick={() => onClickStop(InstanceId)}
        >
          Stop
        </Button>
      </td>
    </tr>
  );
}

function Table({ instances, onClickStart, onClickStop }) {
  console.log(instances);
  return instances.length ? (
    <BSTable striped>
      <thead>
        <tr>
          <th>KeyName</th>
          <th>InstanceID</th>
          <th>InstanceType</th>
          <th>State</th>
          <th>PublicIpAddress</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {instances.map(props => (
          <TableRow
            key={props.InstanceId}
            {...props}
            onClickStart={onClickStart}
            onClickStop={onClickStop}
          />
        ))}
      </tbody>
    </BSTable>
  ) : (
    <p>Loading...</p>
  );
}

export default Table;
