const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};

  const employeeByFirstName = employees.find((employee) => employee.firstName === employeeName);

  const employeeByLastName = employees.find((employee) => employee.lastName === employeeName);

  if (!employeeByFirstName) return employeeByLastName;

  return employeeByFirstName;
}

module.exports = getEmployeeByName;
