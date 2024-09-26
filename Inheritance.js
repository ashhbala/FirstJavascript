class Car
{
    setName(name)
    {
        this.name = name
    }

    startEngine()
    {
        console.log(this.name + " has started")
    }
    stopEngine()
    {
        console.log(this.name + " has stopped")
    }
}

class Toyota extends Car
{
    topSpeed(speed)
    {
        console.log("This " + this.name + " has a top speed of " + speed + "m/hr")
    }
}
let myCar = new Toyota()
myCar.setName("Tesla")
myCar.startEngine()
myCar.stopEngine()
myCar.topSpeed(350)


