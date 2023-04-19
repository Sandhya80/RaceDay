let raceNumber = Math.floor(Math.random() * 1000);
const earlyReg = true;
const runnerAge = 19;
//runner's age is 18 and registered early
if (runnerAge === 18 && earlyReg)  {
  raceNumber += 1000;
} 
//runner is adult and registered early 
if (runnerAge > 18 && earlyReg)  {
  console.log(`You will race at 9.30 am and your race number is: ${raceNumber}.`);
} 
//runner is adult and did not register early
else if (runnerAge > 18 && !earlyReg)  {
  console.log(`You will race at 11:00 am and your race number is: ${raceNumber}.`);
}
//runner's age is less than 18 irrespective of registeration time 
else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm and your race number is: ${raceNumber}`);
}
 else {
  console.log('Please see the registration desk');
 }

