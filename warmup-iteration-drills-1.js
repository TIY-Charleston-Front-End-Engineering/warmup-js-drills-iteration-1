console.log('wired up')
// MORNING WARMUP


// Task 1 `makeProperNoun()`
//=====================
// Write a function called `makeProperNoun()`
// It should accept a string as an argument and return the string with the first letters capitalized.

var makeProperNoun = function(){

}


var output1 = makeProperNoun("billy")
var output2 = makeProperNoun("houston")
var output3 = makeProperNoun("the never ending story")
var output4 = makeProperNoun("memorial day")

console.assert(output1 === "Billy")
console.assert(output2 === "Houston") 
console.assert(output3 === "The Never Ending Story")
console.assert(output4 === "Memorial Day")



// Task 2 `iPutTheFunIn()`
//=====================
// Write a function called `iPutTheFunIn()`
// It should accept a string and return a string with the word `~¡FUN!~` inserted in the middle

//
// If the argument is an odd number of characters (like 7),
// make the fun come early and round down for the midpoint
// i.e.   iPutTheFunIn('you') => y~!FUN!~ou
//

//
// If the argument passed to the function is only
// one character long, then it should return:
// i.e.   iPutTheFunIn('you') => 'sorry thats not very fun'
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
