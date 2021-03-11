const numbersArray = [1, 2, 3, 4, 5, 6, 7];

//console.log(numbersArray);

//console.log(numbersArray.length);

//for (let i = 0; i < numbersArray.length; i++) {
//  const arrayItem = numbersArray[i];
//  const newValue = arrayItem * 2;
//  console.log(numbersArray[i]);
//}

function double(arr) {
  const resultsArr = [];

  for (let i = 0; i < arr.length; i++) {
    const arrayItem = arr[i];

    if (arrayItem % 2 === 0) {
      const newValue = arrayItem * 2;

      resultsArr.push(newValue);
    } else {
      const newValue = arrayItem * 2;

      resultsArr.push(newValue);
    }
  }

  return resultsArr;
}

const result = double(numbersArray);

console.log(numbersArray);
console.log(result);
