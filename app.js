require("dotenv").config()
// ! dotenv import must be above all other imports 

const Express = require("express"); //invoking require function, specifying which module to import
const app = Express() // grabbing express nodule from line one and invoking it 
/*
    * First we create a variable to import express from node modules folder into our file using require() method 
    * Creating top level function Express() to gain access to all of its methods and properties: 
        *HTTP requests
        * middleware functionality 
        * basic app settings
*/

app.listen(process.env.PORT, () => {
    console.log(`[server]: app.js is listening on 4000`)
    //console.log(process.env) // Shows all loaded variables that exist in process.env^
})