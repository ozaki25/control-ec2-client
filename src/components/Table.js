import React from 'react';
import { Button, Table as BSTable } from 'reactstrap';
import api from '../api';

const onClickStart = async id => {
  try {
    const res = await api.startInstances({ InstanceIds: [id] });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

const onClickStop = async id => {
  try {
    const res = await api.stopInstances({ InstanceIds: [id] });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

function TableData({
  InstanceId,
  InstanceType,
  KeyName,
  PublicIpAddress,
  State: { Code, Name },
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

function Table({ instances }) {
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
          <TableData key={props.InstanceId} {...props} />
        ))}
      </tbody>
    </BSTable>
  ) : (
    <p>Loading...</p>
  );
}

export default Table;
