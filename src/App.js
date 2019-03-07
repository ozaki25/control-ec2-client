import React from 'react';
import { Button, Container } from 'reactstrap';
import Header from './components/Header';
import Table from './components/Table';
import api from './api';

const styles = {
  container: { paddingTop: '15px' },
};

function App() {
  const [instances, setInstances] = React.useState([]);

  React.useEffect(() => {
    fetchInstances();
    setInterval(fetchInstances, 30000);
  }, []);

  const fetchInstances = async () => {
    const result = await api.getInstances();
    if (result) {
      setInstances([...result.Reservations.map(r => [...r.Instances])].flat());
    }
  };

  const onClickStart = async id => {
    await api.startInstances({ InstanceIds: [id] });
    fetchInstances();
  };

  const onClickStop = async id => {
    await api.stopInstances({ InstanceIds: [id] });
    fetchInstances();
  };

  return (
    <>
      <Header />
      <Container style={styles.container}>
        <Table
          instances={instances}
          onClickStart={onClickStart}
          onClickStop={onClickStop}
        />
        <Button onClick={fetchInstances}>Reload</Button>
      </Container>
    </>
  );
}

export default App;
