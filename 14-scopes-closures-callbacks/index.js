// var happy;



 function fun1(aCallBackFunction) {
   console.log(aCallBackFunction())
 }

 const cb = function() {
   console.log("%cfun2", "color :purple")
 }

fun1(cb)



// [1,2,3]

function myForEach(arr,callBackFuction) {
  for (let i = 0; i < arr.length; i++) {
      callBackFuction(arr[i])
  }
}

myForEach([1,2,3], thisIsTheCallBack())




function thisIsTheCallBack(num) {
  return "yes"
}

// /**************** Lexical Scoping ************************/
//
// for (var i = 0; i < array.length; i++) {
//   array[i]
// }
//
// // var name = "Charles Entertainment Cheese & chicken nuggets and fries"
//
// function sayName() {
//     // here
//   var name = "yaboi"
//   console.log(name)
//   return function() {
//     // var name = "easy"
//     console.log(name)
//   }
//
// }
//
// console.log(name)
//
//
// var
//
// let
//
// const
//
// name = "ok"

// sayName()
//
// const megaCoolFunction = function() {
//   console.log('yeets for cheats')
// }
//
//
//
// let coolObj = 'string of LIES'
//
// function tookAArg(arg1) {
//   arg1()
// }
//
//
// tookAArg(megaCoolFunction)
//
//
//
//
// megaCoolFunction()
//
// console.log(megaCoolFunction)
// console.log(mikeJones)
//
// function mikeJones() {
//
//   console.log("2813308004")
// }
//
// var happy = '🌝'




//
// // const shirt = 'shaped like a t, which is why it is called a t-shirt'
// //
// // function printShirt(  ) {
// //   console.log(shirt)
// // }
// // console.log(shirt)
// //
// // printShirt()
//
// // shirt
//
// // // pants
// //
// // function outerHeight() {
// //   const height = 10
// //   const innerHeight = function() {
// //     const height = 'HOTDOG'
// //     const dino = 't-rex'
// //     console.log('HEIGHT IS: ', height)
// //   }
// //   return innerHeight
// // }
// //
// // outerHeight()()
//
//
// /*******************************************************/
//
// /*******************JS Scopes***************************/
// /*******************Global***************************/
// // const globalName = 'winfield'
//
// /*******************Function***************************/
// //
// // function pizza() {
// //   const toppings = 'olives, pineapple, pepperoni, anchovies, sprinkles'
// // }
// //
// // pizza()
//
// // toppings
//
// /*******************Block***************************/
// //
// // {
// //   const fish = 'salmon'
// // }
// //
// // const o = { hello: 'world', hi: 'there' }
// // console.log(o.hello)
// //
// // if (true) {
// //   const sneakers = 'jordans'
// //   console.log(sneakers)
// // }
// //
//
// /*******************************************************/
//
// /************** Var Let Const *********************/
//
// //var can be redeclared and reassigned AS MANY TIMES AS I WANT
//
// var tomato = 'a nice tomato sauce'
//
// tomato = 'sundried (are they actually dried in the sun🤔)'
//
// var tomato = function() {
//   console.log('o what??????')
// }
//
// // let can be reassigned BUT NOT REDECLARED
//
// let pears = 'green and kinda mushy'
//
// pears = 'a late summer fruit??????'
//
// // let pears = 'not a winter fruit'
//
// //const can neither be redeclared nor reassigned
//
// const apple = 'a fall fruit (also a tech company lol but do not eat ur macbook)'
//
// // apple = 'just a fruit'
//
// // const apple = 'a tech giant'
//
// // vars declared without var/let/const will become GLOBAL ¯\_(ツ)_/¯
//
// function declareDriver() {
//   driver = 'dale earnhardt jr'
// }
//  // console.log(driver)
// // declareDriver()
//
// // driver
//
// /////////////****** HOISTING *******////////////
// //
// console.log(happy)
//
// var happy = '🤠'
//
// console.log(happy)
//
// // console.log(sharks)
// let sharks = "threat to the internet"
//
// console.log(sharks)
//
//
// currentMood()
//
// function currentMood() {
//   console.log('🤔🧐🙄')
// }
//
// console.log(coolFunction)
//
// var coolFunction = function(){
//   console.log('man, soo cool')
// }
//
// currentMood()
// //
// // currentMood = 'DEF NOT A FUNCTION'
// //
// // console.log(currentMood)
// //
// // console.log(bueller)
// //
// // var bueller = function() {
// //   console.log('BUUUEEEELLLLERRRRRR')
// // }
// //
// // bueller()
// //
// //
// //
// // let belt = 'Gucci'
//
//  let name ='something'
// function hoistVar() {
//   console.log(name)
//   if (true) {
//     var name = 'jimmy'
//   }
//   console.log(name)
// }
//
//
// //
// // for (let i = 0; i < 10; i++) {
// //   console.log(i, "inside for loop")
// // }
// // console.log(i, "outside for loop")
//
// // {
// //   var insideBlock = "blocked!"
// // }
// // console.log(insideBlock)
//
// // hoistVar()
// //
// // //****** First Class Functions ******************//
// //
// const hamburger = function() {
//   return 'cheese, nice'
// }
//
// const higherOrder = function(cb) {
//   return cb()
// }
//
//
// console.log(higherOrder(hamburger))
// //
// //
// // //////////****** Higher Order Functions && Closures ******************/////
//
// function higherOrderJamesBond(movie) {
//   // const moreCONSTS = "captured?"
//   // const movie = 'the ice palace one with Halle Berry'
//   return function innerFn() {
//     return `My favorite James Bond film is ${movie}`
//   }
// }
//
//
// const badBondMovie = higherOrderJamesBond()
//
// console.log(badBondMovie())
// const favBondMovie = higherOrderJamesBond
// console.log(favBondMovie)
