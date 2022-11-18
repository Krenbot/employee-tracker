const inquirer = require('inquirer')
const sql = require('mysql2')
require('dotenv').config()
const cTable = require('console.table');

const viewDepartments = async () => {
    THEN I am presented with a formatted table showing department names and department ids
}

const viewRoles = async () => {
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
}

const viewEmployees = async () => {
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
}

const addDepartment = async () => {
// THEN I am prompted to enter the name of the department and that department is added to the database
}

const addRole = async () => {
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
}

const addEmployee = async () => {
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
}

const updateEmployee = async () => {
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
}

const promptChoices = async () => {
    const choices = await inquirer.prompt ([{
        type: 'list',
        message: 'Choose an action',
        name: 'choices',
        choices: ['VIEW all Departments', 'VIEW all Roles', 'VIEW all Employees', 'ADD a Department', "ADD a Role", 'ADD an Employee', "UPDATE Employees"]
    }
])
}