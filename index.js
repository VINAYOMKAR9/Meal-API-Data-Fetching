async function getCat(){
    try{

        let a = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        let data = await a.json()
        console.log(data.meals);
    }
    catch(rej){
        console.log('Some err is there in fetching...');
    }

}


async function getIngree(){
    try{

        let a = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
        let data = await a.json()
        console.log(data.meals);
    }
    catch(rej){
        console.log('Some err is there in fetching...');
    }

}
let con = document.querySelector('#container');
let cate = document.querySelector('#get-category-data');
cate.addEventListener('click',catee);

function catee(){
 
    getCat();    
}

let ing = document.querySelector('#get-ingredient-data');
ing.addEventListener('click',ingre);

function ingre(){    
    getIngree();   
}