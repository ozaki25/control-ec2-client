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

  const fetchInstances = async () => {
    try {
      const { Reservations } = await api.getInstances();
      console.log(Reservations);
      setInstances([...Reservations.map(r => [...r.Instances])].flat());
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    fetchInstances();
  }, []);

  return (
    <>
      <Header />
      <Container style={styles.container}>
        <Table instances={instances} />
        <Button onClick={{}}>Reload</Button>
      </Container>
    </>
  );
}

export default App;
