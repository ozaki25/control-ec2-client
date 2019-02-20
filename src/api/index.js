const api = process.env.REACT_APP_API;
const getInstancesApi = `${api}instances`;
const startInstancesApi = `${api}instances/start`;
const stopInstancesApi = `${api}instances/stop`;

const getInstances = async () => {
  try {
    const res = await fetch(getInstancesApi);
    if (res.ok) {
      return res.json();
    } else {
      console.log(res);
    }
  } catch (e) {
    alert(e.toString());
    console.log(e);
  }
};

const startInstances = async body => {
  try {
    const res = await fetch(startInstancesApi, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (res.ok) {
      return res.json();
    } else {
      console.log(res);
    }
  } catch (e) {
    alert(e.toString());
    console.log(e);
  }
};

const stopInstances = async body => {
  try {
    const res = await fetch(stopInstancesApi, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (res.ok) {
      return res.json();
    } else {
      console.log(res);
    }
  } catch (e) {
    alert(e.toString());
    console.log(e);
  }
};

export default {
  getInstances,
  startInstances,
  stopInstances,
};
