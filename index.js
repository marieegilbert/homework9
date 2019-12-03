const questions = [
  
];

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

function writeToFile(fileName, data) {
 
}

function init() {
}

init();

var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your GitHub username",
      name: "username"
    },
    {
      type: "green, blue, pink, red",
      message: "Choose a color from the following options: green, blue, pink, red",
      name: "color"
    },
  ])
  .then(function(response) {



axios
  .get("https://www.omdbapi.com/?t=The%20Matrix&apikey=trilogy")
  .then(function(res) {
    console.log(res.data);
  });

  });


  axios Github key = 4dd9f19f9a36480ac3fe62591c042bf4b5d6637a
  https://api.github.com/graphql