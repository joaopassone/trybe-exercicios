const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const flatArray = arrays.reduce((array, curr) => {
    curr.forEach((element) => array.push(element));
    return array;
  }, []);
  return flatArray;
}
