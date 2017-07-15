const isEven = function (x) { return x % 2 === 0; };

// filter function definition here..
const filter = function(numbers, func) {
  let result = [];
  for(let number of numbers) {
    if(func(number)) {
      result.push(number);
    }
  }
  return result;
}

filter([1, 2, 3, 4], isEven);

filter([1, 2, 3, 4], function(x){ return x > 2 });
