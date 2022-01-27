const data = require('../data/zoo_data');

function countAnimals(animal) {
  const specifiedAnimal = data.species.find((element) => element.name === animal.specie);
  function counter(arr) {
    return arr.species.reduce((amountOfAnimals, animals) => {
      amountOfAnimals[animals.name] = animals.residents.length;

      return amountOfAnimals;
    }, {});
  }
  if (!animal) return counter(data);
  if (!animal.sex) return counter(data)[animal.specie];
  // vi essa parte no código da Luá Octáviano
  const correctSexArray = specifiedAnimal.residents.reduce((accumulator, current) => {
    if (current.sex === animal.sex) accumulator.push(current);
    return accumulator;
  }, []);
  return correctSexArray.length;
}

module.exports = countAnimals;
