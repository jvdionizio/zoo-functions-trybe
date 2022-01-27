const data = require('../data/zoo_data');

function countAnimals(animal) {
  function counter(arr) {
    return arr.species
      .reduce((amountOfAnimals, animals) => ({
        ...amountOfAnimals, [animals.name]: animals.residents.length,
      }), {});
  }
  if (!animal) return counter(data);
  if (!animal.sex) return counter(data)[animal.specie];
  // vi essa parte no código da Luá Octáviano
  const specifiedAnimal = data.species.find((element) => element.name === animal.specie);
  const correctSexArray = specifiedAnimal.residents.reduce((accumulator, current) => {
    if (current.sex === animal.sex) accumulator.push(current);
    return accumulator;
  }, []);
  return correctSexArray.length;
}

console.log(countAnimals());

module.exports = countAnimals;
