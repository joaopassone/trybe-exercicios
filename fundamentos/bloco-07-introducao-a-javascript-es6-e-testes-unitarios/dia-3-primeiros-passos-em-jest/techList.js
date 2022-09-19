function techList(array, name) {
  array.sort();
  list = [];
  for (let index = 0; index < array.length; index += 1) {
    list.push({tech: array[index], name: name});
  }
  if (list.length === 0)
    return 'Vazio!';
  return list;
}

module.exports = techList;
