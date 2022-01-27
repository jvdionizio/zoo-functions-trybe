const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function map() {
  const speciesMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((specie) => {
    if (specie.location === 'NE') speciesMap.NE.push(specie.name);
    if (specie.location === 'NW') speciesMap.NW.push(specie.name);
    if (specie.location === 'SE') speciesMap.SE.push(specie.name);
    if (specie.location === 'SW') speciesMap.SW.push(specie.name);
  });

  return speciesMap;
}

// function mapNames() {
//   const mapNames = map();
//   data.species
// }

function getAnimalMap(options) {
  // seu código aqui
  if (!options || !options.includeNames) return map();
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
