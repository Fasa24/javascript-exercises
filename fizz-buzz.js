const n = 33;

function fizzBuzz(n) {
  if (typeof n !== "number" || Number.isNaN(n) || n <= 0 || n % 1 !== 0) {
    console.error("Error: Debe ingresar un número entero positivo mayor a cero.");
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(n);