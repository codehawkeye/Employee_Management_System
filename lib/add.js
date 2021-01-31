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
exports.addEmployee = () => {
  // function to handle posting new employee up for auction
  // function addEmployee() {
  // var allRoles = [];
  // for (var i = 0; i < allRolesArray.length; i++) {
  //   allRoles.push(allRolesArray[i].)
  
    // prompt for info about the item being put up for auction
    inquirer
      .prompt([
        {
          name: "fName",
          type: "input",
          message: "What is the new employees First name?"
        },
        {
          name: "lNmame",
          type: "input",
          message: "What is the new employees last name?"
        },
        {
          name: "role",
          type: "list",
          message: "What is the employees role?",
          choices: roles         
        
        },

      ])
      .then(function (answer) {
        var newId = (roles.indexOf(answer.role)) + 1
        console.log(newId);
        // when finished prompting, insert a new item into the db with that info
        connection.query(
          "INSERT INTO role SET ?",
          {
            first_name: answer.fName,
            last_name: answer.lName,
            role_id: newRoleId
            // highest_bid: answer.startingBid || 0
          },
          function (err) {
            if (err) throw err;
            console.log(`${answer.role} ${answer.fName} ${answer.lName} has been added successfully!`);
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
      });
  }
 
  
  