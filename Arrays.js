let Books = ["IE", "Death", "More than a life"]

console.log(Books[1])
Books.push("Karma")
console.log(Books)
Books[2] = "Mystics Musings"
console.log(Books)

let x
for(x in Books)
{console.log(x)}

for (x of Books)
{console.log(x)}

let phones = new Array("Iphone","Android","Pixel")
{console.log(phones)}

// let y
// for (y in phones)
// {console.log(y)}

console.log(phones.length)


///splice, push,pop,delete,shift unshift, slice, concat