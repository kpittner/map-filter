console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});
//**************Question One*****************//

// [1,2,3,4,5].map(function(elm,idx,arr){
//   return elm*2
// })
// [1,2,3,4,5].reduce(function(sum,curr))
//   return sum = sum + curr
// [2] === [1,2,3,4,5].filter(function(elm){
//   return elm % 2 === 0
// })

var sumOfPrices = items.map(function(el) {
  return el.price;
});

var total = sumOfPrices.reduce(function(sum, curr) {
  return sum + curr;
});

document.querySelector("#answer1").innerHTML = total / sumOfPrices.length;

//**************Question Two*****************//
var itemsInBetween = items.filter(function(el) {
  return el.price > 14 && el.price < 18 && el.currency_code === "USD";
}).map(function(el) {
  return el.title + "<br>"
})

document.querySelector("#answer2").innerHTML = itemsInBetween;


// //**************Question Three*****************//
var gbpProd = items.filter(function(el) {
  return el.currency_code === "GBP";
}).map(function(el) {
  return el.title + " " + "$" + el.price
})
document.querySelector("#answer3").innerHTML = gbpProd;


// //**************Question Four*****************//
var wood = items.filter(function(el) {
  return _.contains(el.materials, "wood");
}).map(function(el) {
  return el.title + "<br>"
})
  _.each(wood, function(el) {
    document.querySelector("#answer4").innerHTML = wood;


// //**************Question Five*****************//
var eightOrMore = items.filter(function(el) {
  return el.materials.length >= 8;
}).map(function(el) {
  return el.title + " " + "$" + el.price + "<br>" + " " + "\t" + el.materials + " " + "<br>"
})
document.querySelector("#answer5").innerHTML = eightOrMore;


// //**************Question Six*****************//
var who = items.filter(function(el) {
  return el.who_made === "i_did";
}).map(function(el) {
  return el.title
})
  document.querySelector("#answer6").innerHTML = who.length;

});
