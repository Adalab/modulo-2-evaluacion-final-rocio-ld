'use strict';

const input = document.querySelector ('.js-textInput');
const searchbtn = document.querySelector ('.js-search');
const listdrinks = document.querySelector ('.js.ulList');

/*const renderCharacter= (arrayDrinks)=>{
    listCocktails.innerHTML='';
    for(const eachdrink of arrayDrinks){
        listCocktails
    }
}*/

let drinks= [];

/*const getDataApi =()=>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data)
    })

}*/

const handleSearchCocKtails =()=>{
    const valueInput= input.value;
    



}

searchbtn.addEventListener('click', handleSearchCocKtails);




