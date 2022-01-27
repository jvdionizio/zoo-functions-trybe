const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const getEmployeeById = () => data.employees
    .filter((employee) => employee.id === id);

  const selectedEmployee = getEmployeeById()[0];
  const selectedId = selectedEmployee.responsibleFor[0];

  const getSpecieById = species.filter((specie) => specie.id === selectedId);
  const selectedSpecie = getSpecieById[0];

  const getOldestAge = selectedSpecie.residents
    .reduce((older, resident) => ((older > resident.age) ? older : resident.age), 0);

  const getOldestInfo = selectedSpecie.residents
    .find((resident) => resident.age === getOldestAge);

  return Object.values(getOldestInfo);
}

module.exports = getOldestFromFirstSpecies;
