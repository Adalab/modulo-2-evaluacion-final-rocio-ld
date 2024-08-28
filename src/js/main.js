'use strict';

const main= document.querySelector ('.main');
const listAnimes = document.querySelector('.js-ulList');
const divInput = document.querySelector('.divInput');
const searchbtn = document.querySelector('.js-search');
const input = document.querySelector('.js-textInput');
const liEvent=document.querySelector('.liEvent');
const ulFav= document.querySelector('.ulListFav')
let animes = [];
let animesFavorites=[];


const  renderAnimes = (arrayAnimes) => {
    listAnimes.innerHTML = '';
    
    for (const eachAnime of arrayAnimes) {

      
        const liElement = document.createElement('li');
        liElement.setAttribute('id',eachAnime.mal_id);
        liElement.setAttribute('class','liEvent')
        listAnimes.appendChild(liElement);

        const img = document.createElement('img');
        const imageSrc= eachAnime.images.jpg.image_url ? eachAnime.images.jpg.image_url : 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
        img.setAttribute('src', eachAnime.images.jpg.image_url);
        img.setAttribute('alt', eachAnime.title);
        img.setAttribute('class', 'img');
        liElement.appendChild(img);

        const h3Title = document.createElement('h3');
        const h3Text = document.createTextNode(eachAnime.title)
        h3Title.setAttribute('class', 'h3');
        h3Title.appendChild(h3Text);
        liElement.appendChild(h3Title);


        liElement.addEventListener('click',handleFavorites);

    };
};
const  renderAnimesFavorites = (arrayAnimes) => {
    ulFav.innerHTML = '';
    
    for (const eachAnime of arrayAnimes) {

      
        const liElement = document.createElement('li');
        liElement.setAttribute('id',eachAnime.mal_id);
        liElement.setAttribute('class','liEvent')
        ulFav.appendChild(liElement);

        const img = document.createElement('img');
        const imageSrc= eachAnime.images.jpg.image_url ? eachAnime.images.jpg.image_url : 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
        img.setAttribute('src', eachAnime.images.jpg.image_url);
        img.setAttribute('alt', eachAnime.title);
        img.setAttribute('class', 'img');
        liElement.appendChild(img);

        const h3Title = document.createElement('h3');
        const h3Text = document.createTextNode(eachAnime.title)
        h3Title.setAttribute('class', 'h3');
        h3Title.appendChild(h3Text);
        liElement.appendChild(h3Title);

    };
};


const getDataApi = (anime) => {
    fetch(`https://api.jikan.moe/v4/anime?q=${anime}`)
        .then((response) => response.json())
        .then((data) => {
            animes = data.data;
            console.log(animes);
            renderAnimes(animes);
            
        });
};

// Hacer la funcion de renderizar la lista con el array

getDataApi('naruto');


const handleSearch = () => {
    const searchValue = input.value;
    getDataApi(searchValue);
};


const handleFavorites =(event)=>{
const id= parseInt(event.currentTarget.id);
console.log(id);
//buscar la id a ver si está en el array-> si no está nos devuelve -1, buscar el índice en el array de favoritos
const indexAnimesFavorite = animesFavorites.findIndex((eachAnime)=> eachAnime.mal_id=== id);
if (indexAnimesFavorite === -1){
const animeClickada = animes.find((eachAnime)=> eachAnime.mal_id === id);
animesFavorites.push(animeClickada);
}console.log(animesFavorites);
renderAnimesFavorites(animesFavorites);
};
// hacer find para buscar si el anime buscado esta en la lista de favoritos, si no esta devuelveme undefined y si estuviera devuelveme el objeto
//const findAnimeInFavorite= animesFavorites.find((eachAnime)=>eachAnime.id === eachAnime.mal_id);
//si esta devolverá diferente de undefined, y añado la clase de las favoritas


//Realizar la funcioón manejadora del evento al botón de buscar
searchbtn.addEventListener('click', handleSearch);


//Realizar una funcion manejadora para marcar favoritos




















