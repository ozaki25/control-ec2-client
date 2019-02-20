const api = process.env.REACT_APP_API;
const getInstancesApi = `${api}status`;

const getInstances = async () => {
  try {
    const res = await fetch(getInstancesApi);
    return res.json();
  } catch (e) {
    alert(e.toString());
    console.log(e);
  }
};

export default {
  getInstances,
};
