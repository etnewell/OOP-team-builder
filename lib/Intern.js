// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, school) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Intern";
      this.school = school;
    };
    getName(){
      return this.name;
    };
  
    getId(){
      return this.id;
    };
  
    getEmail(){
      return this.email;
    }
  
    getRole(){
      return this.role;
    }
    
    getSchool(){
        return this.school;
    }
  
    setName(name){
      this.name = name;
    };
  
    setId(id){
      this.id = id;
    };
  
    setName(name){
      this.name = name;
    };
  
    setSchool(school){
      this.school = school;
    };
  
    };
  
  module.exports = Intern;