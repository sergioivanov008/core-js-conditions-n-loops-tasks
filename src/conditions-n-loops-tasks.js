/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let out = 0;

  if (a > out) out = a;
  if (b > out) out = b;
  if (c > out) out = c;

  return out;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let tempStr = '';
  const tempArr = [];
  const queenX = queen.x;
  const queenY = queen.y;
  const kingStr = `${king.x}-${king.y}`;

  function getLines(x, y) {
    for (let i = 0; i <= 8; i += 1) {
      tempArr.push(`${x}-${i}`);
      tempArr.push(`${i}-${y}`);
      tempArr.push(`${x + i}-${y + i}`);
      tempArr.push(`${x + i}-${y - i}`);
      tempArr.push(`${x - i}-${y + i}`);
      tempArr.push(`${x - i}-${y - i}`);
    }
  }

  getLines(queenX, queenY);

  tempStr += tempArr.join(',');

  return tempStr.includes(kingStr);
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let out = false;

  if (a === 0 || b === 0 || c === 0) return false;

  if (a === b) {
    out = a + b > c;
  } else if (a === c) {
    out = a + c > b;
  } else if (b === c) {
    out = b + c > a;
  }

  return out;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const tempObj = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
  };

  let point = 0;
  let dec = 0;

  let out = '';

  if (num <= 10) {
    point = num;
    out = tempObj[point];
  } else {
    point = num % 10;
    dec = num - point;
    out = `${tempObj[dec]}${tempObj[point]}`;
  }

  return out;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let out = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const el = numberStr[i];
    const space = i < numberStr.length - 1 ? ' ' : '';

    switch (el) {
      case '1':
        out += `one${space}`;
        break;
      case '2':
        out += `two${space}`;
        break;
      case '3':
        out += `three${space}`;
        break;
      case '4':
        out += `four${space}`;
        break;
      case '5':
        out += `five${space}`;
        break;
      case '6':
        out += `six${space}`;
        break;
      case '7':
        out += `seven${space}`;
        break;
      case '8':
        out += `eight${space}`;
        break;
      case '9':
        out += `nine${space}`;
        break;
      case '0':
        out += `zero${space}`;
        break;
      case '-':
        out += `minus${space}`;
        break;
      case '.':
        out += `point${space}`;
        break;
      case ',':
        out += `point${space}`;
        break;

      default:
        break;
    }
  }

  return out;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let strReverse = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    strReverse += str[i];
  }

  return str === strReverse;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;

  for (let i = 0; i < str.length - 1; i += 1) {
    if (str[i] === letter) {
      index = i;
      break;
    }
  }

  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let input = num;
  let out = false;

  while (input > 0) {
    const remain = input % 10;

    if (remain === digit) {
      out = true;
      break;
    }

    input = Math.trunc(input / 10);
  }

  return out;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let index = -1;

  for (let i = 0; i < arr.length - 1; i += 1) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let j = 0; j < i; j += 1) {
      sumLeft += arr[j];
    }

    for (let k = i + 1; k < arr.length; k += 1) {
      sumRight += arr[k];
    }

    if (sumLeft === sumRight) {
      index = i;
      break;
    }
  }

  return index;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const limitNum = size * size;
  let num = 0;
  let step = 0;

  const tempArr = [];
  for (let i = 0; i < size; i += 1) {
    tempArr[i] = [];
    for (let j = 0; j < size; j += 1) {
      tempArr[i][j] = 0;
    }
  }

  function drawSpiral() {
    while (num <= limitNum) {
      for (let i = step; i < size - step * 1; i += 1) {
        num += 1;
        if (num === limitNum + 1) return;
        tempArr[step][i] = num;
      }
      for (let i = step + 1; i < size - step * 1; i += 1) {
        num += 1;
        if (num === limitNum + 1) return;
        tempArr[i][size - step * 1 - 1] = num;
      }
      for (let i = size - (2 + step * 1); i >= step * 1; i -= 1) {
        num += 1;
        if (num === limitNum + 1) return;
        tempArr[size - step * 1 - 1][i] = num;
      }
      for (let i = size - (2 + step * 1); i >= step * 1 + 1; i -= 1) {
        num += 1;
        if (num === limitNum + 1) return;
        tempArr[i][step] = num;
        if (i === step * 1 + 1) step += 1;
      }
    }
  }

  drawSpiral();

  return tempArr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newArr = [];
  const column = matrix[0].length;
  const row = matrix.length;

  for (let i = 0; i < column; i += 1) {
    const newRow = [];
    for (let j = row - 1; j >= 0; j -= 1) {
      newRow[j] = matrix[j][i];
    }
    const newRowReverse = [];
    let k = 0;
    for (let m = newRow.length - 1; m >= 0; m -= 1) {
      newRowReverse[k] = newRow[m];
      k += 1;
    }
    newArr[i] = newRowReverse;
  }

  const newMatrix = matrix;
  for (let i = 0; i < newArr.length; i += 1) {
    newMatrix[i] = newArr[i];
  }
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  function recSort(curArr) {
    if (curArr.length <= 1) return curArr;

    const pivotIndex = Math.floor(curArr.length / 2);
    const pivotValue = curArr[pivotIndex];
    const arrPivot = [];
    const arrLess = [];
    const arrMore = [];

    for (let i = 0; i < curArr.length; i += 1) {
      if (curArr[i] === pivotValue) {
        arrPivot[arrPivot.length] = curArr[i];
      } else if (curArr[i] < pivotValue) {
        arrLess[arrLess.length] = curArr[i];
      } else if (curArr[i] > pivotValue) {
        arrMore[arrMore.length] = curArr[i];
      }
    }

    return [...recSort(arrLess), ...arrPivot, ...recSort(arrMore)];
  }

  const sortArr = recSort([...arr]);
  const newArr = arr;
  for (let i = 0; i < newArr.length; i += 1) {
    newArr[i] = sortArr[i];
  }
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let outStr = str;
  const resObject = { 0: str };

  for (let i = 0; i < iterations; i += 1) {
    const curStr = resObject[i];
    let evenPart = '';
    let oddPart = '';

    for (let j = 0; j < curStr.length; j += 1) {
      if (j % 2 > 0) {
        oddPart += curStr[j];
      } else {
        evenPart += curStr[j];
      }
    }

    outStr = evenPart + oddPart;

    if (outStr === str) {
      return resObject[iterations % (i + 1)];
    }

    resObject[i + 1] = outStr;
  }

  return outStr;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  function getIndex(arr, el) {
    let index = -1;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === el) {
        index = i;
        break;
      }
    }
    return index;
  }
  function convertToArr(num) {
    let canDo = true;
    let newDigit = num;
    const arrDigit = [];
    while (canDo) {
      arrDigit.push(newDigit % 10);
      const tempDigit = Math.trunc(newDigit / 10);
      if (tempDigit === 0) {
        canDo = false;
      } else {
        newDigit = tempDigit;
      }
    }
    return arrDigit.reverse();
  }
  const numberArr = convertToArr(number);
  let canDo = true;
  let index = -1;
  for (let i = numberArr.length - 1; i > 0; i -= 1) {
    if (!canDo) break;
    if (numberArr[i - 1] < numberArr[i]) {
      index = i - 1;
      canDo = false;
    }
  }
  if (index === -1) return number;

  const numIndex = numberArr[index];
  const leftPart = [...numberArr].splice(0, index);
  const rightPart = [...numberArr].splice(index + 1, numberArr.length - 1);
  const rightPartMaxMinValue = [...rightPart]
    .filter((el) => el > numIndex)
    .sort()[0];
  const rightPartMaxMinValueIndex = getIndex(
    [...rightPart],
    rightPartMaxMinValue
  );
  rightPart.splice(rightPartMaxMinValueIndex, 1, numIndex);
  rightPart.sort((a, b) => a - b);
  const outDigit = +[...leftPart, rightPartMaxMinValue, ...rightPart].join('');

  return outDigit;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
