/*//Crie 3 variáveis, cada uma com um array:
- Comedy
-Action
-Fantasy 

//Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
-title:
-director:
-year: 
*/

let Comedy = [{
    title:'Meet the parents',
    director:'Jay Roach',
    year:2000,
},{
    title:'Mean Girls',
    director:' Mark Waters',
    year:2004,
},{
    title:'The mask',
    director:'Chuck Russell',
    year:1994,
}]

let Action = [{
    title:'Mad Max: Fury Road ',
    director:'George Miller',
    year:2015,
},{
    title:'The Spy Who Dumped Me',
    director:'Susanna Fogel',
    year:2018,
},{
    title:'Birds of Prey ',
    director:'Cathy Yan',
    year:2020,
}]


let Fantasy = [{
    title:'The Labyrinth of the Faun',
    director:'Guillermo del Toro',
    year:2006,
},{
    title:'Coraline and the secret world',
    director:'Henry Selick',
    year:2009,
},{
    title:"miss peregrine's home for peculiar children",
    director:'Tim Burton',
    year:2016,
}]

console.table(Comedy)
console.table(Action)
console.table(Fantasy)

//Escolha uma variável e insira uma condição para ela, 
//(condição de sua escolha), com a seguinte mensagem ao console: 

//IF: "MY FAVORIT MOVIE IS..."
//ELSE: "NOT EVEN 5 STARS..." 

if(Fantasy[0].title === 'The Labyrinth of the Faun'){
        console.log(`My favorite movie is ${Fantasy[0].title}` )

}
else{
    console.log('Not even 5 stars')
}