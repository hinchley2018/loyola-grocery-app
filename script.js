//Single line comment in js

/*
Some longer notes in a multi-line comment
These things can go on for several lines
But I'm done talking for now
*/

//this is a variable think of it like a box with some data in it
var x = 5

var someOtherData = "hello world"

//you can also initialize the box without var but I don't recommend it
notRecommended = "Not a good practice to not declare var first"

//there are some other variable keywords 

//let and const are newer
let myPet = "dog"

//you can't change the value of this variable, just like jonathon's love for pizza will never end
const myFavoriteFood = "pizza"

//we can also do math
var bankAccountBalance = 100
var couchOnAmazon = 300

//print and format values
console.log("How much do i have if I purchase the couch", bankAccountBalance - couchOnAmazon)

//re-assign values
bankAccountBalance = bankAccountBalance + 1000 //from a paycheck :)

/*
We have been making declarative statments so far - do something with this variable
Boolean expressions - ask a question / express something 
*/
var haveEnough = (bankAccountBalance - couchOnAmazon) >= 0
console.log("Do I have enough to purchase the couch",haveEnough )

function makeMeASandwich(me, bread, peanutButter, jelly,){
    peanutButter.open()
    peanutButter.spread(bread)
    jelly.open()
    jelly.spread(bread)
    bread.fold()
    me.eat()
}