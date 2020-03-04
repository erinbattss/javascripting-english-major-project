/*let tipCalculator;
tipCalculator = function(multiVariable, divVariable){
let multiTotal;
let divTotal;
if (tipAmount < 1){
multiTotal = total * tipAmount;
$("#response").html("Your tip is $" + multiTotal);} else {
divTotal = total % tipAmount;
$("#response").html("Your tip is $" + divTotal);
}
};
let tipAmount;
tipAmount = 20;
let total;
total = 50;
tipCalculator(); */
/* let makeABurrito;
makeABurrito = function(beansVariable){
  let beansResponse;
  beansResponse = "You ordered " + beansVariable + " beans. Good choice!";
  $("#response").html(beansResponse);
};
let blackBeans;
blackBeans = "black";
makeABurrito(blackBeans); */
/* let tipCalculator;
tipCalculator = function(multiVariable, divVariable){
  let multiTotal;
  let divTotal;
  if (tipAmount > 1){
    multiTotal * tipAmount;
    $("#response").html("Your tip is $" + multiTotal);}
    else {
      divTotal = total % tipAmount;
      $("response").html("Your tip is $" + divTotal);
    }
};
let tipAmount;
tipAmount = 20;
let total;
total = 50;
tipCalculator(); */
/* let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1,2,3];
arrayMixed = ["a", null, true, arrayOfNumbers, [4.5, 5.6]];
$("#response").html(arrayMixed[4]); */
/*let myBurritoObject;
myBurritoObject = {
  tortilla : "wheat",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: 3
};
$("#response").html(myBurritoObject.tortilla); */
/* let myHabaneroSauceSquirts, myBurritoObject;
myHabaneroSauceSquirts = 3;
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: myHabaneroSauceSquirts,
  spiciness: function(){
    if (myHabaneroSauceSquirts > 0){
      alert("This is a spicy burrito!");
    } else {
      alert("This is a mild burrito.");
    }
  }
};
$("#response").html("Your " + myBurritoObject.tortilla + " burrito has " +
myBurritoObject.habaneroSauceSquirts +
" squirts of habanero.");
myBurritoObject.spiciness(); */
/*let turtles, sortedTurtles, reversedTurtles, turtleNames;
turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
sortedTurtles = turtles.sort();
reversedTurtles = turtles.reverse();
turtleNames = turtles.join(" ");
turtles.push("Splinter");
turtles.pop(); */
let turtles;
 turtles = ["Leo", "Don", "Ralph", "Michael"];
 let lastturtle = turtles.pop(); //returns Michael
 $("#response").html(lastturtles);
