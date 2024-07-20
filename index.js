function scuberGreetingForFeet(feet){
 let result;
 if(feet > 2500){
    result = "No can do.";
  }
  else if (feet > 2000){
    result = "I will gladly take your thirty bucks.";
  }
  else if(feet >= 400){
    result = "That will be twenty bucks.";
  }
  else {
  result = "This one is on me!";
  
  }
  return result;
}

function ternaryCheckCity(city){
    return city === "NYC" ? "Ok, sounds good." : "No go.";
  
}

function switchOnCharmFromTip(tip){
  let result;
  switch (tip){
  case 'generous': return "Thank you so much.";
  break
  case 'not as generous': return "Thank you.";
  break
  case 'thanks for everything': return "Bye.";
  break
  }
 
}

console.log(scuberGreetingForFeet);
console.log(ternaryCheckCity);
console.log(switchOnCharmFromTip);
