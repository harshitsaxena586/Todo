var input = document.querySelector("#input")
var show = document.querySelector("#output")
var button = document.querySelector("#click")
var url="https://source.unsplash.com/1600x900/?"

// function linkGenerator(text){
//     return <img src="https://source.unsplash.com/1600x900/?"+text>
// }

function getImage(){
    return
}

function clickHandler(){
show.innerHTML=  <img style="flex-grow: 1;" class="item" src="https://source.unsplash.com/random/
" alt=""></img>
}
import { createClient } from 'pexels';

const client = createClient('563492ad6f9170000100000191f18bfbf0814fed8b2e33a4793ba8d0');
const query = 'Nature';

client.photos.search({ query, per_page: 1 }).then(photos => {...});

button.addEventListener("click" ,clickHandler)