// Code your solution here!
function printString(string) {
  if (string.length > 1) {
    console.log(string[0]);
    printString(string.substring(1, string.length));
  } else {
    console.log(string);
  }
}

function reverseString(string) {
  if (string.length > 1) {
    return (
      string[string.length - 1] +
      reverseString(string.substring(0, string.length - 1))
    );
  } else {
    return string;
  }
}

// function isPalindrome(string) {
//   return string == reverseString(string) ? true : false;
// }
function isPalindrome(string) {
  if (string.length > 1) {
    return string[0] == string[string.length - 1]
      ? isPalindrome(string.substring(1, string.length - 1))
      : false;
  } else {
    return true;
  }
}

function addUpTo(array, index = array.length - 1) {
  let slicedArray = array.slice(0, index + 1);
  if (slicedArray.length > 1) {
    return slicedArray[0] + addUpTo(slicedArray.slice(1));
  } else {
    return slicedArray[0];
  }
}

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, --index) : array[index];
}

function maxOf(array) {
  if (Array.isArray(array)) {
    let arrayCopy = array;
    if (arrayCopy.length > 1) {
      arrayCopy[0] > arrayCopy[1]
        ? arrayCopy.splice(1, 1)
        : arrayCopy.splice(0, 1);
      return maxOf(arrayCopy);
    } else {
      return arrayCopy[0];
    }
  }
}

function includesNumber(array, number) {
  if (Array.isArray(array)) {
    if (array.length > 1) {
      return array[0] == number ? true : includesNumber(array.slice(1), number);
    } else {
      return array[0] == number;
    }
  } else {
    return "This is not an array!";
  }
}

// printString("pizza")
// console.log(reverseString("pizza"));
// console.log(reverseString("chocolate"));
// console.log(isPalindrome("madamimadam"));
// console.log(isPalindrome("pizza"));
// console.log(addUpTo([4, 3, 1, 5], 1));
// console.log(addUpTo([1, 4, 5, 3], 2));
console.log(includesNumber([1, 4, 5, 3], 5));
console.log(includesNumber([1, 4, 2, 3], 5));
