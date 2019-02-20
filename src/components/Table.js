import React from 'react';
import { HTMLTable } from '@blueprintjs/core';

function Table({ instances }) {
  console.log(instances);
  return instances.length ? (
    <HTMLTable bordered>
      <thead>
        <tr>
          <th>InstanceID</th>
          <th>InstanceState</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {instances.map(({ InstanceId, InstanceState }) => (
          <tr key={InstanceId}>
            <td>{InstanceId}</td>
            <td>{`${InstanceState.Code}: ${InstanceState.Name}`}</td>
            <td />
            <td />
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  ) : (
    <p>Loading...</p>
  );
}

export default Table;
