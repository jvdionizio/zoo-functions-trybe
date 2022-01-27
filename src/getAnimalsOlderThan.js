const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui

  const getElementByName = data.species.find((specie) => specie.name === animal);

  return getElementByName.residents.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
