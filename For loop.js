let i ;

for (i =1 ; i <=5 ; i++)
{
  console.log("Value of i is : "+ i)
}


let fruits = ['Apple','Banana','Fig']
let x

for ( x in fruits) //index
{
    console.log(x)
}

for ( x of fruits) //actual value
{
    console.log(x)
}