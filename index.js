function scuberGreetingForFeet(scuberGreetingForFeet){
}
  // Write your code here!
  function scuberGreetingForFeet(city) {

    if (city <= 400){
            return "This one is on me!";
    }
    else if (city > 2000 && city < 2500){
        return "I will gladly take your thirty bucks.";
    }
    else if(city > 2500){
        return "No can do.";
    }
  
  }
  

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC") {
    return "Ok, sounds good.";
}
else{
    return "No go.";
}
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === "generous") {
    return "Thank you so much.";
} else if (tip === "not as generous") {
    return "Thank you.";
} else {
    return "Bye.";
}
}