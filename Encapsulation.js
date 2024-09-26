class Employees{
   //function
    setEmpDetails( name, id ,phoneNo)
    {
        this.name= name
        this.id = id
        this.phoneNo = phoneNo
    }
  //Get methods
      getEmpName()
      {
        return this.name
      }   
      getEmpId()
      {
        return this.id
      }   
      getEmpPhoneNo()
      {
        return this.phoneNo
      }   

}

let emp1 = new Employees()
emp1.setEmpDetails("John",101,602-111-2222)
console.log(emp1.getEmpName())