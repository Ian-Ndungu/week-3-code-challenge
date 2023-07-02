
const film = (movie) => {
var Play =document.createElement("div")
Play.innerHTML=`
<img src="${movie.poster}">
<h2>${movie.title}</h2>
<p>${movie.description}</p>
<p>Showtime: ${movie.showtime}</p>
<p class="book">Tickets Sold: ${movie.tickets_sold}</p>
<button>Book Now</button>`
document.querySelector(".div2").appendChild(Play)
console.log(Play)
Play.querySelector("button").addEventListener("click",()=>{
 movie.tickets_sold+=1
 movie.capacity-=1
 Play.querySelector(".book").textContent=movie.tickets_sold
})
}

let movieVideo;
const fetchData =() => {
    fetch(" http://localhost:3000/films")
    .then(resp => resp.json())
    .then(films =>films.forEach(movie => film(movie)));
}
fetchData();