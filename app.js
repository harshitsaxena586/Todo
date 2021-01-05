var input = document.querySelector("#inputbox")
var show = document.querySelector("#output")
var button = document.querySelector("#click")


function urlGenerator(city){
    return "api.openweathermap.org/data/2.5/weather?q="+city+"&appid=a01331da115ad1dcd7806395dde27639"
}

function clickHandler(){
    city = "London",
    url = urlGenerator(city)
    fetch("api.openweathermap.org/data/2.5/weather?q=London&appid=a01331da115ad1dcd7806395dde27639")
     .then(response =>response.json())
     .then(json=> console.log(json))


}

button.addEventListener("click", clickHandler())