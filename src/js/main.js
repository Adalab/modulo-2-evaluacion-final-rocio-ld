'use strict';

const main = document.querySelector('.main');
const listAnimes = document.querySelector('.js-ulList');
const divInput = document.querySelector('.divInput');
const searchbtn = document.querySelector('.js-search');
const input = document.querySelector('.js-textInput');
const liEvent = document.querySelector('.liEvent');
const ulFav = document.querySelector('.ulListFav')
const divFav = document.querySelector('.js-divFav');
const btnLog= document.querySelector('.js-buttonLog');
let animes = [];
let animesFavorites = [];


const renderAnimes = (arrayAnimes) => {
    listAnimes.innerHTML = '';

    for (const eachAnime of arrayAnimes) {


        const liElement = document.createElement('li');
        liElement.setAttribute('id', eachAnime.mal_id);
        liElement.setAttribute('class', 'liList');
        listAnimes.appendChild(liElement);
        const img = document.createElement('img');
        const imageSrc = eachAnime.images.jpg.image_url ? eachAnime.images.jpg.image_url : 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
        img.setAttribute('src', eachAnime.images.jpg.image_url);
        img.setAttribute('alt', eachAnime.title);
        img.setAttribute('class', 'img');
        liElement.appendChild(img);

        const h3Title = document.createElement('h3');
        const h3Text = document.createTextNode(eachAnime.title)
        h3Title.setAttribute('class', 'h3');
        h3Title.appendChild(h3Text);
        liElement.appendChild(h3Title);

        const paragraph= document.createElement('p');
        const textParagraph= document.createTextNode(eachAnime.score); 
        liElement.appendChild(paragraph);
        paragraph.appendChild(textParagraph)

        /*const paragraphRecomended=document.createElement('p');
        const textparRecomended= document.createTextNode(eachAnime.score);
        liElement.appendChild(paragraphRecomended);
        paragraphRecomended.appendChild(textparRecomended);*/
        if(eachAnime.score > 7){
            const paragraphRecomended=document.createElement('p');
            const textparRecomended= document.createTextNode('Recomendada');
            liElement.appendChild(paragraphRecomended);
            paragraphRecomended.appendChild(textparRecomended);
        }

       

        //buscar si el anime es favorito
        const findAnimeInFavorite = animesFavorites.find((item) => item.mal_id === eachAnime.mal_id);
        if (findAnimeInFavorite) {
            liElement.classList.add('selected')
        };

        liElement.addEventListener('click', handleFavorites);


    };
};

const handleDelete = (event) => {
    const id = parseInt(event.currentTarget.id);
    const indexFavorite = animesFavorites.findIndex((eachAnime) => eachAnime.mal_id === id);
    console.log(event.currentTarget.id);
    animesFavorites.splice(indexFavorite, 1)
    localStorage.setItem('animeLS', JSON.stringify(animesFavorites));

    renderAnimesFavorites(animesFavorites);
    renderAnimes(animes)

    // añadir clase hidden
    if (animesFavorites.length === 0) {
        divFav.classList.add('hidden');
    }
};


const renderAnimesFavorites = (arrayAnimes) => {
    ulFav.innerHTML = '';

    for (const eachAnime of arrayAnimes) {


        const liElement = document.createElement('li');
        const icon = document.createElement('i');
        icon.setAttribute('class', 'fa-solid fa-circle-xmark');
        liElement.appendChild(icon);
        icon.setAttribute('id', eachAnime.mal_id);
        liElement.setAttribute('class', 'liEvent')
        //liElement.setAttribute('class','<i class="fa-solid fa-circle-xmark"></i>')
        ulFav.appendChild(liElement);


        const img = document.createElement('img');
        //const imageSrc = eachAnime.images.jpg.image_url ? eachAnime.images.jpg.image_url : 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
        img.setAttribute('src', eachAnime.images.jpg.image_url);
        img.setAttribute('alt', eachAnime.title);
        img.setAttribute('class', 'imgFav');
        liElement.appendChild(img);

        const h3Title = document.createElement('h3');
        const h3Text = document.createTextNode(eachAnime.title)
        h3Title.setAttribute('class', 'h3');
        h3Title.appendChild(h3Text);
        liElement.appendChild(h3Title);


        icon.addEventListener('click', handleDelete);
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

//Guardo en Local Storage el array favorites, y lo pongo al principio cuando carga la página
const getLocalAnimeFavorite = () => {
    //cargar en local Storage
    const savedLocalAnimeFavorites = localStorage.getItem('animeLS');
    if (savedLocalAnimeFavorites) {
        animesFavorites = JSON.parse(savedLocalAnimeFavorites)
        renderAnimesFavorites(animesFavorites);
    };
};
getLocalAnimeFavorite();

// Hacer la funcion de renderizar la lista con el array

getDataApi('naruto');


const handleSearch = () => {
    const searchValue = input.value;
    getDataApi(searchValue);
};

const handleFavorites = (event) => {
    const id = parseInt(event.currentTarget.id);
    //buscar la id a ver si está en el array-> si no está nos devuelve -1, buscar el índice en el array de favoritos
    const indexAnimesFavorite = animesFavorites.findIndex((eachAnime) => eachAnime.mal_id === id);
    if (indexAnimesFavorite === -1) {
        const animeClickada = animes.find((eachAnime) => eachAnime.mal_id === id);
        animesFavorites.push(animeClickada);
        divFav.classList.remove('hidden');//quitar clase hidden
        
        //la funcion de guardar en el localStorage lo pongo en este punto para que me vaya guardando la lista
        localStorage.setItem('animeLS', JSON.stringify(animesFavorites));
    };
    renderAnimesFavorites(animesFavorites);
    renderAnimes(animes);
};

const handleLog = ()=> {
   
    console.log(animesFavorites.length)
}

//Realizar la funcioón manejadora del evento al botón de buscar
searchbtn.addEventListener('click', handleSearch);

//Hacer evento para borrar la lista de favoritos y borrar caché

btnLog.addEventListener('click', handleLog);






















