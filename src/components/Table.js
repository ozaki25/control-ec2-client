import React from 'react';
import { Table as BSTable } from 'reactstrap';

function TableData({ InstanceId, InstanceType, KeyName, State: { Name } }) {
  return (
    <tr>
      <td>{KeyName}</td>
      <td>{InstanceId}</td>
      <td>{InstanceType}</td>
      <td>{Name}</td>
      <td />
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
