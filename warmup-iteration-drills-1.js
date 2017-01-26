console.log('wired up')


// Task 1 `hasQ()`
// Write a function called hasQ that accepts a string and returns true/false
// for whether that string has the word 'q' in it.




var output1 = hasQ("my mother enjoys quilting.")
var output2 = hasQ("i'm not wearing any socks.")
var output3 = hasQ("Quit yelling in my ear.")
var output4 = hasQ("I went to a quarry to pick up some stone slabs.")
var output5 = hasQ("My brain is made of cheese and my knees are jelly")

console.assert(output1 === true )
console.assert(output2 === false )
console.assert(output3 === true)
console.assert(output4 === false)
console.assert(output5 === true)



// Task 2 `iPutTheFunIn()`
//=====================
// Write a function called `iPutTheFunIn()`
// It should accept a string and return a string with the word `~!FUN!~` inserted in the middle
// i.e.   iPutTheFunIn('ball') => ba~!FUN!~ll

//
// If the argument is an odd number of characters (like 7),
// make the fun come early and round down for the midpoint
// i.e.   iPutTheFunIn('you') => y~!FUN!~ou
//

//
// If the argument passed to the function is only
// one character long, then it should return:
// i.e.   iPutTheFunIn('I') => 'sorry thats not very fun'
//
//


// INPUT: String
var iPutTheFunIn = function(){

	//  OUTPUT: String (modified)
}


var output1 = iPutTheFunIn("blue")
var output2 = iPutTheFunIn("codings")
var output3 = iPutTheFunIn("this is a very serious issue")
var output4 = iPutTheFunIn("I")

console.assert(output1 === "bl~!FUN!~ue")
console.assert(output2 === "cod~!FUN!~ings") //HINT: Math.floor(«decimal-value») for rounding down
console.assert(output3 === "this is a very~!FUN!~ serious issue")
console.assert(output4 === "sorry thats not very fun")
