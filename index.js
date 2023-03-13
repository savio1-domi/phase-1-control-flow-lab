// let feet = 300
function scuberGreetingForFeet(feet){
  // Write your code here!
  // giving conditions
  if (feet < 400){
    return 'This one is on me!' 
  }else if(feet > 2000 && feet <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if(feet > 2500){
    return 'No can do.'
  }
}
function ternaryCheckCity(city){
  //giving conditions
  if (city === 'NYC'){
    return 'Ok, sounds good.'
  }
  else if(city !== 'NYC'){
    return 'No go.'
  }
}
function switchOnCharmFromTip(tip){
  //giving conditions
  if(tip === 'generous'){
    return 'Thank you so much.'
  }
  else if(tip === 'not as generous'){
    return 'Thank you.'
  }
  else{
    return 'Bye.'
  }
}