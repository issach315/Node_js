import generateName from 'sillyname';
import superHeroes from 'superheroes';

//generating the random name 
const myName = generateName();
console.log(`My name is ${myName}.`);

//generating the random superhero name 
const myHero =superHeroes.random();
console.log(`My fav superHero is ${myHero} 🕶️`);

