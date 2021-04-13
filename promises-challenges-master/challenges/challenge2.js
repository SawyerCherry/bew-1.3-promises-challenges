/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 *    it will return the greet function in this case Hello there, Ducky and it will
 * return "make school is awesome!!!" in all caps. I amde sure of this because it
 * takes in type of string, and that passes. our promises will be executed.
 * 
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 *    if greet fails, because name is set to an integer then it will default to the catch, printing "Received an error!" and since name has to be a string, the uppercaser will fail, because it isn't called in the catch. 
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 *      Since the name is once again set to a string, it will be called on in the *  instance of greet. but, since the my_str is set to an integer. it will throw this to the catch statement, logging to the console "Received an error!" then the uppercaser function prints "Argument to uppercaser must be a string". this is because the uppercaser function has a setTimeout() as well.
 * 
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 * 
 *    Name this method spacer(str). It should run asynchronously, so use a 
 *    setTimeout() and return a Promise.
 * 
 *    Last, call spacer() after you call greeter() and uppercaser().
 * 
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one. 
 * 
 *******************************************************************************
 */




 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 1000);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 1500);
    });
}

function spacer(str) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
    if (typeof str === 'string') {
        resolve(str.split("").join(" "));
    } else {
        reject('Argument to spacer must be string');
    }
    }, 2000);
});
}


let name = "Sawyer"
/*I changed this back to something else */
let my_str = "WWE Smackdown!!"
let thing_string = "Hello Vlad"



greet(name)
    .then((greetResult) => {
        console.log(greetResult)
        return uppercaser(my_str);
    })
    .then((uppercaserResult) => {
        console.log(uppercaserResult);
    })
    .then((spacerResult) => {
      console.log(spacerResult)
      return spacer(thing_string);
    })
    .catch((err) => {
        console.log('Received an error!')
        console.log(err);
    });
