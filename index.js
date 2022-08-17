function scuberGreetingForFeet(distance){
  // Write your code here!
  let charges;
  if(distance<= 400){
    charges = 'This one is on me!';
    
  }
  else if(distance > 2000 && distance < 2500){
     charges = 'I will gladly take your thirty bucks.';
  }
  else {
    charges = 'No can do.';
  }
  return charges;
}
scuberGreetingForFeet(199);

function ternaryCheckCity(city){
  // Write your code here!
 
  return city === 'NYC'?'Ok, sounds good.':'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous': return "Thank you so much.";
    
    case 'not as generous': return "Thank you.";
    
    default: return 'Bye.';
    
  }
}