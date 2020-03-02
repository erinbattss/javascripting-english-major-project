let userInput;
 userInput = prompt("Who is the most beautiful person alive?", "There's only one right answer.");
 if ( userInput === "Harry Styles" || "Harry styles" || "harry styles" ) {
   $("#response").html("You have great taste");
 } else {
   $("#response").html("Absolutely not");
 }
/* if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
} */
