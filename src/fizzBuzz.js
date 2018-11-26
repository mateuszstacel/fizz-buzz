function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  if (this.divisible(15, number)) {
    return 'FizzBuzz';
  } else if (this.divisible(5, number)) {
    return 'Buzz';
  } else if (this.divisible(3, number)) {
    return 'Fizz';
  } else {
    return number;
  }
}


  FizzBuzz.prototype.divisible = function(divisor, number) {
    return number % divisor === 0;
  }

//printing to console
var fizzBuzz = new FizzBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(fizzBuzz.play(i));
}
