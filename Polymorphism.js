class Animal{
    constructor(name)
    {
        this.name=name
    }
    eats()
    {
        console.log(this.name + " Eats food")
    }
}

let pet = new Animal('Dog')
pet.eats()

class Aligator extends Animal{
    
    
    eats()
    {
        super.eats()
        console.log(this.name + " Eats fish")
    }
}

let childClass = new Aligator('Murphy')
childClass.eats()

