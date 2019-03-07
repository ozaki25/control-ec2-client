import React from 'react';
import { Button, Table as BSTable } from 'reactstrap';

const STATUS = {
  PENDING: 0,
  RUNNING: 16,
  SHUTTING_DOWN: 32,
  TERMINATED: 48,
  STOPPING: 64,
  STOPPED: 80,
};

function TableRow({
  InstanceId,
  InstanceType,
  KeyName,
  PublicIpAddress,
  State: { Code, Name },
  onClickStart,
  onClickStop,
}) {
  // prettier-ignore
  const color = Code === STATUS.RUNNING ? 'table-success' :
                Code === STATUS.STOPPED ? 'table-secondary' : 'table-warning';
  return (
    <tr>
      <td>{KeyName}</td>
      <td>{InstanceId}</td>
      <td>{InstanceType}</td>
      <td className={color}>{Name}</td>
      <td>{PublicIpAddress}</td>
      <td>
        <Button
          size="sm"
          disabled={Code !== STATUS.STOPPED}
          onClick={() => onClickStart(InstanceId)}
        >
          Start
        </Button>
      </td>
      <td>
        <Button
          size="sm"
          disabled={Code !== STATUS.RUNNING}
          onClick={() => onClickStop(InstanceId)}
        >
          Stop
        </Button>
      </td>
    </tr>
  );
}

function Table({ instances, onClickStart, onClickStop }) {
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
