const fetch = require('node-fetch');

export const fetchData = async (item) => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/"
  const url = `https://limitless-coast-03095.herokuapp.com/item_search/${item}`
  const data = await fetch(proxyurl+url);
  if (data.status === 200) {
    return data.json();
  }
  throw new Error('Unable to fetch data');
};