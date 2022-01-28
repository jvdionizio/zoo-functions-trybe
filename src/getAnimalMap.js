const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const speciesMap = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

function simpleMap() {
  species.forEach((specie) => {
    if (specie.location === 'NE') speciesMap.NE.push(specie.name);
    if (specie.location === 'NW') speciesMap.NW.push(specie.name);
    if (specie.location === 'SE') speciesMap.SE.push(specie.name);
    if (specie.location === 'SW') speciesMap.SW.push(specie.name);
  });

  return speciesMap;
}

// function mapWithNames() {
//   const especieWithNames = species.reduce((acc, specie) => {
//     acc[specie.name] = specie.residents.name;
//     return acc;
//   }, {});
//   species.forEach((specie) => speciesMap[specie.location] = especieWithNames);
// }

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) return simpleMap();
  // if (options.includeNames) return mapWithNames();
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
