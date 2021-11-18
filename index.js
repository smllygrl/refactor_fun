let button = document.querySelector("#submitButton");
// A number is interesting if it is has atleast 2 of the following:

// prime,
// modulus

// ends in 1 or 5,
// split, [-1] 1 or 5 else

// sum of digits is a multiple of 10,
// split, reduce, modulus

// all digits are multiples of 3 or 5
// for loop, split, modulus
let isPrime = true;
let sumTen = false;
let endsInOneOrFive = false;
let multiplesFiveOrThree = true;

const isInteresting = (
  isPrime,
  sumTen,
  endsInOneOrFive,
  multiplesFiveOrThree
) => {
  let count = 0;

  if (isPrime) count += 1;
  if (sumTen) count += 1;
  if (endsInOneOrFive) count += 1;
  if (multiplesFiveOrThree) count += 1;

  console.log(isPrime, sumTen, endsInOneOrFive, multiplesFiveOrThree);
  console.log("COUNT: ", count);

  if (count > 1) {
    return n + " is intersting";
  } else if (count > 0) {
    return n + " is okay";
  } else {
    return n + " is booooooring";
  }
};

function isInteresting(n) {
  //   Checks if prime by moving backwards through an array?
  for (let i = n - 1; i > 1; --i) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  //   Checks if it ends in 1 or 5?
  // split ('') [-1] = 1 or 5 else no
  let sum = 0;
  let stringified = n.toString();
  for (let i = 0; i < stringified.length; ++i) {
    sum += parseInt(stringified[i]);
  }
  if (sum % 10 === 0) sumTen = true;
  if (n % 10 === 1 || n % 10 === 5) {
    endsInOneOrFive = true;
  }
  for (let i = 0; i < stringified.length; ++i) {
    if (+stringified[i] % 3 === 0 || +stringified[i] % 5 === 0) {
      continue;
    } else {
      multiplesFiveOrThree = false;
      break;
    }
  }
}

button.addEventListener("click", () => {
  let input = document.querySelector("#numberInput");
  let value = parseInt(input.value);

  let interesting = isInteresting(value);

  let output = document.querySelector("#output");
  output.innerText = interesting;
});

document.querySelector("#primeButton").addEventListener("click", () => {
  let input = document.querySelector("#primeInput");
  let n = parseInt(input.value);

  isPrime = true;

  for (let i = n - 1; i > 1; --i) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  const output = document.querySelector("#primeOutput");
  if (isPrime) {
    output.innerHTML = n + " is prime!";
  } else {
    output.innerHTML = n + " is not prime!";
  }
});
