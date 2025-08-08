import {main} from './app.js'
main("write story of dog life")
  .then(db => console.log("Final story DB:", db))
  .catch(console.error);