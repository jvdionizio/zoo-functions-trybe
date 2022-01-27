const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const entrantsAgeGroup = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) entrantsAgeGroup.child += 1;
    if (entrant.age < 50 && entrant.age >= 18) entrantsAgeGroup.adult += 1;
    if (entrant.age >= 50) entrantsAgeGroup.senior += 1;
  });

  return entrantsAgeGroup;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const entrantsAgeGroup = countEntrants(entrants);

  let totalPayable = 0;

  totalPayable += (entrantsAgeGroup.child * 20.99);

  totalPayable += (entrantsAgeGroup.adult * 49.99);

  totalPayable += (entrantsAgeGroup.senior * 24.99);

  return totalPayable;
}

module.exports = { calculateEntry, countEntrants };
