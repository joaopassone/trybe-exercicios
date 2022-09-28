const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.
const { spring } = yearSeasons;
const { summer } = yearSeasons;
const { autumn } = yearSeasons;
const { winter } = yearSeasons;
const months = [...spring, ...summer, ...autumn, ...winter];

console.log(months);
