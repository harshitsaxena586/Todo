var input = document.querySelector("#input")
var show = document.querySelector("#output")
var button = document.querySelector("#click")



function getImage(link){
    holder = document.createElement("img")
    holder.src = link
    holder.className="item"
    show.appendChild(holder)
}

url ="https://api.pexels.com/v1"
import { createClient } from 'pexels';

const client = createClient('563492ad6f9170000100000191f18bfbf0814fed8b2e33a4793ba8d0');

fetch(url)
getImage("")
