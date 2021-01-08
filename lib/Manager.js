// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Manager";
      this.officeNumber= officeNumber;
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
    
    getOfficeNumber(){
        return this.officeNumber;
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
  
    setOfficeNumber(officeNumber){
      this.officeNumber = officeNumber;
    };
  
    };
  
  module.exports = Manager;