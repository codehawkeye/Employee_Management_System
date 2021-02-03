var mysql = require("mysql");
var inquirer = require("inquirer");
var figlet = require('figlet');
var roles =[]
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootroot",
  database: "employeesMS"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log(`Connected as${connection.threadId}\n`);
  console.log(figlet.textSync('Employee Tracker', {
    font: 'standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}));
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "addOrView",
      type: "list",
      message: "What would you like to do?",
      choices: ["Add new employee", "View an exsisting employee", "Update employee role", "Exit"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.addOrView === "Add new employee") {
        addEmployee();
      }
      else if (answer.addOrView === "View an exsisting employee") {
        viewEmployee();

      }
      
      else if (answer.addOrView === "Update employee role") {
        updateEmployee();
      
      } else { 
        connection.end();
      }

    });
}

// function to handle posting new items up for auction
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
        name: "role",
        type: "list",
        message: "What is the employees role?",
        choices: roles
      }
    ])
    .then(function (answers) {
      var roleId = null;
      for (var i = 0; i < rolesResults.length; i++) {
        if (rolesResults[i].title === answers.role) {
          roleId = rolesResults[i].rol_id
        }
      }
      
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: answer.first_Name,
          last_name: answer.last_Name,
          role_id: answer.roleId,
        },
        function (err) {
          if (err) throw err;
          console.log("Your new employee was created successfully!");
          // re-prompt the user for if they want to bid or post
          start();
        }
      )
    });
}
