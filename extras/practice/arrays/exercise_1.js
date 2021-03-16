/**
 * Write a function that iterates over an array
 * and returns the count of all even numbers
 * present in the input array.
 *
 * NOTE: Use the forEach method
 */
// [1, 2, 3, 4, 5]
const evenNumbersCounter = (numbersArray) => {
  const evenNumbers = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    const currentNumber = numbersArray[i];
    if (currentNumber % 2 === 0) {
      evenNumbers = evenNumbers + 1;
    }
  }
  return evenNumbers;
};
evenNumbersCounter([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
//export default evenNumbersCounter;
