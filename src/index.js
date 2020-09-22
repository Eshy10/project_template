import {fetchData} from './fetch.js';
import './phone.css'

fetchData().then((data) => {
    const activity = document.getElementById('phone');
    activity.innerText = data.activity
}).catch((error) => {
    console.log(error)
})

