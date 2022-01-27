const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }

  return ids.reduce((selectedEspecies, idNumber) => {
    selectedEspecies.push(data.species.find((specie) => specie.id === idNumber));
    return selectedEspecies;
  }, []);
}

module.exports = getSpeciesByIds;
