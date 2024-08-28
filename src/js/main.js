'use strict';

const listDrinks = document.querySelector ('.js-ulList');
const divInput= document.querySelector('.divInput');
const searchbtn = document.querySelector ('.js-search');
const input = document.querySelector ('.js-textInput');
let drinks= [];

//Sacar datos del servidor y guardarlo en una variable llamada drinks
/*const renderCocktails=(cocktails)=>{
    listDrinks.innerHTML='';
    for(const cocktail of cocktails){
        listDrinks.innerHTML += `
      <li>
            <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
            <h3>${cocktail.strDrink}</h3>
        </li>
       ` 
    };  
};*/
const renderCocktail =(cocktails)=>{
    listDrinks.innerHTML= '';
    for(const eachcCoktail of cocktails){

        const liElement= document.createElement('li');
        listDrinks.appendChild(liElement);

        const img= document.createElement('img');
        img.setAttribute('src', eachcCoktail.strDrinkThumb);
        img.setAttribute('alt', eachcCoktail.strDrink);
        img.setAttribute('class','img');
        liElement.appendChild(img);

        const h3Title= document.createElement('h3');
        const h3Text= document.createTextNode(eachcCoktail.strDrink)
        h3Title.setAttribute('class','h3');
        h3Title.appendChild(h3Text);
        liElement.appendChild(h3Title);
    };
};


const getDataApi =(bebida)=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${bebida}`)
    .then((response)=>response.json())
    .then((data)=>{
        drinks=data.drinks;  
        console.log(drinks);
    //renderCocktails(drinks);
    renderCocktail(drinks);
    });
};

// Hacer la funcion de renderizar la lista con el array

getDataApi('margarita');


const handleSearch=()=>{
    const searchValue= input.value;
    getDataApi(searchValue);
}


searchbtn.addEventListener('click', handleSearch);


//Realizar la funcioón manejadora del evento al botón de buscar















/*
const input = document.querySelector ('.js-textInput');
const searchbtn = document.querySelector ('.js-search');
const listDrinks = document.querySelector ('.js.ulList');

const renderCocktails= (arrayDrinks)=>{
    listDrinks.innerHTML='';
    for(const eachDrink of arrayDrinks){
        const liElement= document.createElement('li');
        listDrinks.appendChild(liElement);

        const img= document.createElement('img');
        img.setAttribute('src', eachDrink.strDrinkThumb);
        img.setAttribute('alt', eachDrink.strDrink);
        img.setAttribute('class','img');
        liElement.appendChild(img);

        const H3Title= document.createElement('h3');
        H3Title.setAttribute('class','h3');
        liElement.appendChild(H3Title);
       



    }
}
 renderCocktails();
let drinks= [];

const getDataApi =(value)=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
    .then((response)=> response.json())
    .then((data)=>{
        drinks= data.drinks; 
        renderCocktails(); 
         
    });
};

const handleSearchCocKtails =(event)=>{
    const valueInput= input.value;

    getDataApi(drinks);
    renderCocktails(drinks);
    



}

searchbtn.addEventListener('click', handleSearchCocKtails);

*/


