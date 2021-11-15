
// FizzBuzz 
// Group word game for children to teach them about division
// Replacing any number divisible by three with the word fizz
// Any number divisible by five with the word 'buzz'

const fizzBuzz = (value) => {

    let result = [];
    if(value % 3 == 0 && value % 5 == 0){
        result.unshift('FizzBuzz');
    } else if(value % 3 == 0) {
        result.unshift('fizz');
    } else if(value % 5 == 0) {
        result.unshift('buzz');
    } else {
        result.unshift(value);
    }
    console.log(result);
    if(value == 20) {
        return;
    }
   
    
    // recursive
    fizzBuzz(value+1);
   

}

// Palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward 
const firstPalindromeSolution = (data) => {
    let temp = '';
    for(let index=data.length-1; index >= 0; index--) {
        temp = temp += data.charAt(index);
    }

    if(temp == data) {
        console.log('Palindrome', temp, data);
    } else {
        console.log("isn't palindrome");
    }
}

function secondPalindromeSolution(data) { 
    // Check only until the middle character, because middle character definetly true;
    for(let index =0; index < (data.length-1) / 2; index++) {
        let lastIndex = (data.length - 1) - index;
      if(data.charAt(index) != data.charAt(lastIndex)) {
          return `${data} is not palindrome`;
      }
    }
    return true;
}

// Most important thing in recursion is when does the looping stop?
// If u need another parameter, do not hesitate you can add whatever you needed
const thirdPalindromeSolutionRecursion = function(character,index) {

    // this is the condition when loop must stop
    if(index <= character.length-1) {
        
        // check if first index character is not equal to last index character
        if(character.charAt(index) != character.charAt((character.length-1) - index)) {
                console.log(character.charAt(index), character.charAt((character.length-1) - index));
        } else {
            // if first index character is equal to last index character then do the next loop and compare again
            return thirdPalindromeSolutionRecursion(character,index+1);
        }
    } else {
        // jika sudah lebih dari panjangan stringnya maka 
        return true;
    }

}

// Mean
// Find average value of the stack array
const MeanFunct = (data,index) => {

    let result = 0;
    while(index <= data.length-1 ) {
        result = (result += data[index]); 
        index++;
    }
    result = parseFloat(result / data.length);
    console.log(result);
}


// Median
// Find middle value of the stack array 
// formula is total overall value divide by many value
function MedianFunct(data) {
    let result = null;
    if(data.length % 2 == 0) {
        result = parseFloat((data[parseInt((data.length-1) / 2)] + data[parseInt(data.length / 2)]) / 2);
    } else {
        result = data[parseInt((data.length-1)/2)];
    }
  return result;
}

// Modus
// Value that often appear
// Stiil not true
const ModusFunct = (data) => {
let temp = null;
let oftenAppears = [];
    for(let outter = 0; outter <= data.length-1; outter++) {
            temp = outter;
        for(let index=outter+1; index <= data.length-1; index++) {
            if(data[temp] == data[index]) {
                oftenAppears.push(data[temp]);
            }
        }
    }
    
    console.log(oftenAppears);

}

const runApp = () => {
    // fizzBuzz(20);
    // firstPalindromeSolution('kodok');
    // secondPalindromeSolution('za');
    // thirdPalindromeSolutionRecursion('kodok',0);
    // MedianFunct([31,2,5,6,9,10])
    // MeanFunct([3,2,5,1,3],0);
    ModusFunct([1,2,3,2,5,3,3,6]);
}
runApp();


