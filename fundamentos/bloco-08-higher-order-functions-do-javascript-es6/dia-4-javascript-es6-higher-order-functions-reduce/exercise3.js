const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce((result, name) => {
  let sum = 0;
  name.split('').forEach((letter) => letter.toLowerCase() === 'a' ? sum += 1 : sum);
  return result + sum;
}, 0);
