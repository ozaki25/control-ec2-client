import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import api from './api';

function App() {
  const [instances, setInstances] = React.useState([]);

  const fetchInstances = async () => {
    const { InstanceStatuses } = await api.getInstances();
    console.log(InstanceStatuses);
    setInstances(InstanceStatuses);
  };

  React.useEffect(() => {
    fetchInstances();
  }, []);

  return (
    <>
      <Header />
      <Table instances={instances} />
    </>
  );
}

export default App;
