import {fetchData} from './fetch.js';
import store from './element'
import './phone.css'

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const search = document.getElementById('search').value
    fetchData(search).then((data) => {
        console.log(data)
    const searchDiv = document.getElementById('foundItems');
    const clothes = data.clothing_item
    const searchmsg = document.createElement('h3')
    searchmsg.innerText = 'Found items:'
    searchDiv.appendChild(searchmsg);
    searchDiv.appendChild(store(clothes.price, clothes.name));
}).catch((error) => {
    console.log(error)
})
    form.reset();
})






