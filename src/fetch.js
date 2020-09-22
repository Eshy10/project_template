const fetch = require('node-fetch');

export const fetchData = async () => {
  const data = await fetch('https://www.boredapi.com/api/activity');
  if (data.status === 200) {
    return data.json();
  }
  throw new Error('Unable to fetch data');
};