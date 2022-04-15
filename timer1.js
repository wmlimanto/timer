//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

//takes in the command line input, removes the first two elements (node timer1.js), and sorts it
const timer = process.argv.slice(2).sort();

//executes the function (ring alarm) once for each element in the array
timer.forEach(time => {
  
  //if edge cases (no numbers, negative number, or NaN) are NOT met, beep 
  if (time > 0 && time !== isNaN) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, time * 1000);
  } else {
    return null;
  }
}) 
