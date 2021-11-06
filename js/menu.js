import { fillDB } from './data.js';

const restorants = [`pizza-plus`, `tanuki`, `food-band`, `palki-skalki`, `gusi-lebedi`, `pizza-burger`];
let restoransDB = [];


export const renderItems = (data) => {
  data.forEach(item => console.log(item))
};


restorants.forEach(filename => fillDB(restoransDB, filename, renderItems));


