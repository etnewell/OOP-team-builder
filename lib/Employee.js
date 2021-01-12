// TODO: Write code to define and export the Employee class
// const makeProfile = require("./app.js");

// function Employee() {
//     this.name = "name";
//     this.id = "id";
//     this.email = "email";
//     this.role = "employee";
// };

// const Employee = function(name, id, email, role) {
//   this.name = "name";
//   this.id = "id";
//   this.email = "email";
//   this.role = "employee";
// };


// const Employee = function(){
//   this.name = "name";
//   this.id = "id";
//   this.email = "email";
//   this.role = "employee";
// };

class Employee {
  // Just like constructor functions, classes can accept arguments
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  };
  getName(){
    return this.name;
  };

  getId(){
    return this.id;
  };

  getEmail(){
    return this.email;
  };

  getRole(){
    return this.role;
  };


  setName(name){
    this.name = name;
  };

  setId(id){
    this.id = id;
  };

  setName(name){
    this.name = name;
  };


  };


module.exports = Employee;

// const emp = new Employee("ethan", "12", "ethannewell@me.com");
// // const emp = new Employee();
// console.log(emp);

// namedec = emp.getName();
// console.log(namedec);

// iddec = emp.getId();
// console.log(iddec);

// emaildec = emp.getEmail();
// console.log(emaildec);

// getName() {return this.name};
// setName(name) {this.name = name};

// getId(){return this.idset};
// setId(id){this.id = id};

// getemail() {return this.email};
// setemail(email){this.email = email};



// * name
// * id
// * email
// * getName()
// * getId()
// * getEmail()
// * getRole() // Returns 'Employee'
