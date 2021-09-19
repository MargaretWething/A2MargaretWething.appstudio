
 //Stores name in a variable
 let name = prompt('What is your name?')
 
 //Stores state in a variable
 let state = prompt('What state do you live in? Enter in two capitalized letters.')
 
 //Stores the temperature in a variable
 let temp = prompt('What is the outside temperature in fahrenheit?')
 
 //Create an array to show which message should be put out depending on the user's entered state and temperature
 let message = ['wear a warm coat, hat, scarf, and gloves', 'wear a warm coat but you won\'t need a hat, scarf, or gloves', 'wear your warmest coat, a warm hat, a scarf, and warm gloves', 'wear a warm coat, hat and gloves. Maybe a scarf too']
 
 //Make an if else if statement that shows what should be worn based on users' entered information
 if (temp <32 && state == 'NE') {
  console.log(`${name}, you should ${message[0]}`)
}
else if (temp >= 32 && temp < 50 && state == 'NE') {
  console.log(`${name}, you should ${message[1]}`)
}
else if (temp >= 32 && temp < 50 && state == 'FL') {
  console.log(`${name}, you should $message[2]}`)
}
else if (temp >= 50 && temp < 70 && state == 'FL') {
  console.log(`${name}, you should ${message[3]}`)}
  
