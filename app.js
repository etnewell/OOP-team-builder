const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee.js")
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const initialQ = [
    {
        type: 'list',
        name: 'firstQ',
        message: 'Would you like to add a team member?',
        choices: [
            'yes',
            'no'
        ]
}
];





const roleQ = [
    {
     type: 'list',
     name: 'roleChoice',
     message: 'What is your role in the company?',
     choices: [
         'Employee',
         'Engineer',
         'Manager',
         'Intern'
     ]
}
];

const engineerQ = [
    {
     type: 'input',
     name: 'name',
     message: "What's your name?"
    },
    {
     type:'input',
     name: 'id',
     message: "What's your ID?"
    },
    {
        type:'input',
        name: 'email',
        message: "What's your email?"
    },
    {
        type:'input',
        name: 'github',
        message: "What's your github account?"
    },

];

const employeeQ = [
    {
     type: 'input',
     name: 'name',
     message: "What's your name?"
    },
    {
     type:'input',
     name: 'id',
     message: "What's your ID?"
    },
    {
        type:'input',
        name: 'email',
        message: "What's your email?"
    },
];

const managerQ = [
    {
     type: 'input',
     name: 'name',
     message: "What's your name?"
    },
    {
     type:'input',
     name: 'id',
     message: "What's your ID?"
    },
    {
        type:'input',
        name: 'email',
        message: "What's your email?"
    },
    {
        type:'input',
        name: 'office',
        message: "What's your office number?"
    },

];

const internQ = [
    {
     type: 'input',
     name: 'name',
     message: "What's your name?"
    },
    {
     type:'input',
     name: 'id',
     message: "What's your ID?"
    },
    {
        type:'input',
        name: 'email',
        message: "What's your email?"
    },
    {
        type:'input',
        name: 'school',
        message: "What's your school?"
    },

];


var employeeAry =[];

const newReq = function (){

inquirer.prompt(roleQ).then((response) => {
            console.log(response);
            responseReturn = response.roleChoice;

        console.log(responseReturn);    

        if (responseReturn === 'Intern'){
            inquirer.prompt(internQ).then((answer) => {
                console.log(answer);
                var name = answer.name;
                var id = answer.id;
                var email = answer.email
                var school = answer.school;

                intern = new Intern(name, id, email, school);
                employeeAry.push(intern);
                console.log(employeeAry);

            console.log(intern);
            homePg();
                // return intern;

            })
        }
        else if (responseReturn === 'Engineer'){
            inquirer.prompt(engineerQ).then((answer) => {
                console.log(answer);
                var name = answer.name;
                var id = answer.id;
                var email = answer.email
                var github = answer.github;

                engineer = new Engineer(name, id, email, github);
                employeeAry.push(engineer);
                console.log(engineer)
                console.log(employeeAry);

                homePg();
                // return engineer;
            });
        }
        else if (responseReturn === 'Manager'){
            inquirer.prompt(managerQ).then((answer) => {
                console.log(answer);
                var name = answer.name;
                var id = answer.id;
                var email = answer.email
                var officeNumber = answer.office;

                manager = new Manager(name, id, email, officeNumber);
                employeeAry.push(manager);
                console.log(manager);
                console.log(employeeAry);

            homePg();
                // return manager;
            });
        }
        else if (responseReturn === 'Employee'){
            inquirer.prompt(employeeQ).then((answer) => {
                var name = answer.name;
                var id = answer.id;
                var email = answer.email;


            employee = new Employee(name, id, email);
            employeeAry.push(employee);
            console.log(employeeAry);
            console.log(employee);
            homePg();
                // return employee;
            });
        }
        else {
            console.log("Please enter a valid role")
        };

    });
};

const homePg = function () {
inquirer.prompt(initialQ).then((response) => {
    question1Return = response.firstQ;
if (question1Return === 'yes'){
    newReq();
}
else{
    console.log(employeeAry);
    var fullRender = render(employeeAry);
    console.log(fullRender);

    // var string = JSON.stringify(fullRender)
    fs.appendFile('team.html', fullRender, (err) => { 
        if (err) { 
          console.log(err); 
        } 
        // else { 
        //   // Get the file contents after the append operation 
        //   console.log("\nFile Contents of file after append:", 
        //     fs.readFileSync("example_file.txt", "utf8")); 
        // } 
      }); 
    // outputPath.write(fullRender);


};
});
};
homePg();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
