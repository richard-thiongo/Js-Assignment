// String Manipulation Functions

function reverseString(text) {
  return text.split("").reverse().join("");
}

function countCharacters(text) {
  return text.length;
}

function capitalizeWords(sentence) {
  let words = sentence.split(" ");

  let capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}

// Array Functions

function findMaximum(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let maximum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
  }

  return maximum;
}

function findMinimum(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let minimum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  }

  return minimum;
}

function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

function filterArray(values, condition) {
  return values.filter(condition);
}

// Mathematical Functions

function factorial(number) {
  if (!Number.isInteger(number) || number < 0) {
    throw new Error("Factorial requires a non-negative whole number.");
  }

  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

function isPrime(number) {
  if (!Number.isInteger(number) || number <= 1) {
    return false;
  }

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function fibonacciSequence(numberOfTerms) {
  if (!Number.isInteger(numberOfTerms) || numberOfTerms < 0) {
    throw new Error("The number of terms must be a non-negative whole number.");
  }

  let sequence = [];

  for (let i = 0; i < numberOfTerms; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }

  return sequence;
}

// Examples

function showStringExamples() {
  console.log("Reversed string:", reverseString("Hello world"));
  console.log("Character count:", countCharacters("Hello world"));
  console.log("Capitalized words:", capitalizeWords("javascript is fun"));
}

function showArrayExamples() {
  let numbers = [8, 3, 12, 5, 1];

  console.log("Maximum number:", findMaximum(numbers));
  console.log("Minimum number:", findMinimum(numbers));
  console.log("Sum of numbers:", sumArray(numbers));
  console.log(
    "Numbers greater than 5:",
    filterArray(numbers, (number) => number > 5),
  );
}

function showMathExamples() {
  console.log("Factorial of 5:", factorial(5));
  console.log("Is 7 prime?", isPrime(7));
  console.log("First 7 Fibonacci numbers:", fibonacciSequence(7));
}

function showExamples() {
  showStringExamples();
  showArrayExamples();
  showMathExamples();
}

showExamples();
