function hydrate(string) {
  let numbers = string.replace(/\D+/g, '');
  numbers = numbers.split('');
  console.log(numbers);
  let sum = 0;
  for (number of numbers)
    sum += parseInt(number);

  if (sum === 1)
    return '1 copo de água';
  else
    return `${sum} copos de água`;
}

module.exports = hydrate;
