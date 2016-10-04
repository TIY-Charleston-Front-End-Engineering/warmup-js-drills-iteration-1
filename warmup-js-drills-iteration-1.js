//========================================
// TASK 1
//----------------------------------------
// write a function called `arrayToString()`.
// it should take as input an array, and it should concatenate all of the array's elements into one big string,
// and then return that string.

// EXTRA: Separate each element with a non-breaking space by passing a second argument
//========================================

var example1 = arrayToString(['This', 'is','so','interesting','right','?'])
console.assert(example1 === "Thisissointerestingright?")

var example2 = arrayToString(['I','like','making','strings','from','other','things','.'])
console.assert(example2 === "Ilikemakingstringsfromotherthings.")

var example3 = arrayToString(['Hopefully', "I'm", 'spaced', 'out'], true)
console.assert(example3 === "Hopefully I'm spaced out")


//========================================
// TASK 2
//----------------------------------------
//write  a function called `getTheFOut()` that accepts a string as an argument and returns an array.
// The returned array's first value should be the counted instances of the letter 'f'.
// The array's second value should be a string that has removed all instances of the letter 'f'
//========================================


var example1 = getTheFOut('I effing love this function')
console.assert( example1[0] === 3 )
console.assert( example1[1] === "I eing love this unction" )
//=> [3, "I eing love this unction"  ]

var example2 = getTheFOut('Falafel is made from fava beans in Frankfurt')
//=> [5, 'alael is made rom ava beans in rankurt' ]
console.assert(example2[0] === 6)
console.assert(example2[1] === 'alael is made rom ava beans in rankurt')
