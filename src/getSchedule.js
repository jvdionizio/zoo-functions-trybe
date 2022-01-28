const data = require('../data/zoo_data');

const daysOfTheWeek = Object.keys(data.hours);
const wholeSpecies = data.species.reduce((acc, specie) => {
  acc.push(specie.name);
  return acc;
}, []);
const availability = (specieName) => data.species
  .find((specie) => specie.name === specieName).availability;

function animalsPerDay(day) {
  const speciesOfTheDay = data.species
    .filter((specie) => specie.availability.includes(day));

  return speciesOfTheDay
    .reduce((acc, specie) => {
      acc.push(specie.name);
      return acc;
    }, []);
}

function schedule() {
  return daysOfTheWeek.reduce((acc, day) => {
    if (day === 'Monday') {
      acc[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
      return acc;
    }
    acc[day] = {
      officeHour: `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: animalsPerDay(day),
    };
    return acc;
  }, {});
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (daysOfTheWeek.includes(scheduleTarget)) {
    const selectedDay = {};
    selectedDay[scheduleTarget] = schedule()[scheduleTarget];
    return selectedDay;
  }

  if (wholeSpecies.includes(scheduleTarget)) {
    return availability(scheduleTarget);
  }

  return schedule();
}

console.log(getSchedule('Wednesday'));

module.exports = getSchedule;
