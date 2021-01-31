var inquirer = ("inquire");
var mysql = require("mysql");
var app = require("../app");
var view = require("./view")



// connection to DB
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "rootroot",
  database: "employeeMS",
});
exports.
// function to handle posting new employee up for auction
function addEmployee() {
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: "first_Name",
          type: "input",
          message: "What is the new employees First name?"
        },
        {
          name: "last_Name",
          type: "input",
          message: "What is the new employees last name?"
        },
        {
          name: "Title",
          type: "list",
          message: "What is the employees role?",
          choices: ["roles"]
          
        
        },
      ])
      .then(function(answer) {
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          "INSERT INTO auctions SET ?",
          {
            first_name: answer.fName,
            last_name: answer.lName,
            role : answer.startingBid || 0,
            highest_bid: answer.startingBid || 0
          },
          function(err) {
            if (err) throw err;
            console.log("Your auction was created successfully!");
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
      });
  }
  
  