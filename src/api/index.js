const api = process.env.REACT_APP_API;
const getInstancesApi = `${api}instances`;

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

export default {
  getInstances,
};
