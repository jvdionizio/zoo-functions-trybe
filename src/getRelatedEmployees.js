const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  return data.employees
    .some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  function relatedEmployees() {
    return data.employees
      .filter((employee) => employee.managers.includes(managerId));
  }

  if (relatedEmployees().length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return relatedEmployees().reduce((names, employee) => {
    names.push(`${employee.firstName} ${employee.lastName}`);

    return names;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
