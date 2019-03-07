import React from 'react';
import { Button, Container } from 'reactstrap';
import Header from './components/Header';
import Table from './components/Table';
import api from './api';
import keycloak from './api/keycloak';

const styles = {
  container: { paddingTop: '15px' },
};

function App() {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [instances, setInstances] = React.useState([]);

  // 起動時に一度だけ実行される
  React.useEffect(() => {
    initKeycloak();
  }, []);

  // 起動時と`authenticated`の値が更新された時に実行される
  React.useEffect(() => {
    if (authenticated) getUserFromKeycloak();
  }, [authenticated]);

  // 起動時と`user`の値が更新された時に実行される
  React.useEffect(() => {
    if (authenticated) {
      fetchInstances();
      setInterval(fetchInstances, 30000);
    }
  }, [user]);

  const initKeycloak = () => {
    console.log('App#initKeycloak', { authenticated, user, instances }, new Date());
    const onSuccess = authenticated => setAuthenticated(authenticated);
    const onError = () => alert('failed to initialize');
    keycloak.init(onSuccess, onError);
  };

  const getUserFromKeycloak = () => {
    console.log('App#getUserFromKeycloak', { authenticated, user, instances }, new Date());
    const onSuccess = ({ given_name, family_name, email, sub }) =>
      setUser({ id: sub, name: `${given_name}.${family_name}`, email });
    const onError = () => alert('failed to load');
    keycloak.loadUserInfo(onSuccess, onError);
  };

  const fetchInstances = async () => {
    console.log('App#fetchInstances', { authenticated, user, instances }, new Date());
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
