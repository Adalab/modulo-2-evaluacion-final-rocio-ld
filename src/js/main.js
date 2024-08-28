'use strict';

const listAnimes = document.querySelector('.js-ulList');
const divInput = document.querySelector('.divInput');
const searchbtn = document.querySelector('.js-search');
const input = document.querySelector('.js-textInput');
let animes = [];


const  renderAnimes = (arrayAnimes) => {
    listAnimes.innerHTML = '';
    for (const eachAnime of arrayAnimes) {

        const liElement = document.createElement('li');
        listAnimes.appendChild(liElement);

        const img = document.createElement('img');
        //const imageSrc= eachAnime.strDrinkThumb ? eachAnime.strDrinkThumb : 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
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
}


searchbtn.addEventListener('click', handleSearch);


//Realizar la funcioón manejadora del evento al botón de buscar















