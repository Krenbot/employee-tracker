const inquirer = require('inquirer')
const sql = require('mysql2')
require('dotenv').config()
const cTable = require('console.table');
const connection = require('./db/connection.js');

function init() {
    console.log(`
     _____           _                     _____                         
    |   __|_____ ___| |___ _ _ ___ ___    |     |___ ___ ___ ___ ___ ___ 
    |   __|     | . | | . | | | -_| -_|   | | | | .'|   | .'| . | -_|  _|
    |_____|_|_|_|  _|_|___|_  |___|___|   |_|_|_|__,|_|_|__,|_  |___|_|  
                |_|       |___|                             |___|      
                `)
    promptChoices()
}

const viewDepartments = async () => {
    // THEN I am presented with a formatted table showing department names and department ids
    try {
        const [results] = await connection.promise().query(
            'SELECT * FROM department')
        console.table(results)
        promptChoices()
    } catch (err) {
        throw new Error(err)
    }
}

const viewRoles = async () => {
    // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
    try {
        const [results] = await connection.promise().query(
            'SELECT * FROM role')
        console.table(results)
        promptChoices()
    } catch (err) {
        throw new Error(err)
    }
}

const viewEmployees = async () => {
    // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    try {
        const [results] = await connection.promise().query(
            'SELECT * FROM employee')
        console.table(results)
        promptChoices()
    } catch (err) {
        throw new Error(err)
    }
}

const addDepartment = async () => {
    // THEN I am prompted to enter the name of the department and that department is added to the database
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Department Name:'
        }
    ])
    try {
        const [results] = await connection.promise().query(
            'INSERT INTO department (name) VALUES (?)', answers.name)
        console.table('Department has been added!')
        promptChoices()
    } catch (err) {
        throw new Error(err)
    }
}

const addRole = async () => {
    // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Role Name:'
        }, {
            type: 'number',
            name: 'salary',
            message: 'Salary Amount (ex: 10000): '
        }, {
            type: 'number',
            name: 'department_id',
            message: 'Department ID #:'
        }
    ])

    try {
        const [results] = await connection.promise().query(
            'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [answers.name, answers.salary, answers.department_id])
        console.log('Role has been ADDED to database!')
        promptChoices()
    } catch (err) {
        throw new Error(err)
    }
}

const addEmployee = async () => {
    // THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'First Name:'
        }, {
            type: 'input',
            name: 'last_name',
            message: 'Last Name:'
        }, {
            type: 'number',
            name: 'role_id',
            message: 'Enter Department ID #:'
        }, {
            type: 'number',
            name: 'manager_id',
            message: 'Enter Manager ID #:'
        }
    ])

    try {
        console.log(answers)
        const [results] = await connection.promise().query(
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [answers.first_name, answers.last_name, answers.role_id, answers.manager_id])
        console.log('Employee has been ADDED!')
        promptChoices()
    } catch (err) {
        throw new Error(err)
    }
}

const updateEmployee = async () => {
    // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'id',
            message: 'Enter EMPLOYEE ID #:'
        }, {
            type: 'number',
            name: 'role_id',
            message: 'Enter new EMPOLOYEE ROLE ID#: '
        }
    ])

    try {
        const [results] = await connection.promise().query(
            'UPDATE employee SET role_id = ? WHERE id = ?', [(answers.role_id), (answers.id)])
        console.log('Employee has been UDPATED')
        promptChoices()
    } catch (err) {
        throw new Error(err)
    }
}

const promptChoices = async () => {
    const answers = await inquirer.prompt([{
        type: 'list',
        name: 'choices',
        message: 'Choose an action',
        choices: ['VIEW all Departments', 'VIEW all Roles', 'VIEW all Employees', 'ADD a Department', "ADD a Role", 'ADD an Employee', 'UPDATE Employees', 'EXIT']
    }
    ])

    if (answers.choices === 'VIEW all Departments') {
        viewDepartments()
    } else if (answers.choices === 'VIEW all Roles') {
        viewRoles()
    } else if (answers.choices === 'VIEW all Employees') {
        viewEmployees()
    } else if (answers.choices === 'ADD a Department') {
        addDepartment()
    } else if (answers.choices === 'ADD a Role') {
        addRole()
    } else if (answers.choices === 'ADD an Employee') {
        addEmployee()
    } else if (answers.choices === 'UPDATE Employees') {
        updateEmployee()
    } else if (answers.choices === 'EXIT') {
        return
    }
}

init()

// Update employee managers.
const updateEmployeeManager = async () => {}

// View employees by manager.
// View employees by department.

// Delete departments, roles, and employees.
const deleteDepartment = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Department Name: '
        }
    ])

    try {
const [results] = await connection.promise().query(
    'DELETE FROM department WHERE name = ?', answers.name)
    } catch (err) {
        throw new Error(err)
    }
    console.log('Department has been deleted!')
    promptChoices()
} //CHECK

const deleteRole = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Role title: '
        }
    ])

    try {
const [results] = await connection.promise().query(
    'DELETE FROM role WHERE title = ?', answers.title)
    } catch (err) {
        throw new Error(err)
    }
    console.log('Role has been deleted!')
    promptChoices()
} //CHECK

const deleteEmployee = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Employee ID#: '
        }
    ])
    try {
const [results] = await connection.promise().query(
    'DELETE FROM employee WHERE id = ?', answers.id)
    } catch (err) {
        throw new Error(err)
    }
    console.log('Employee deleted!')
    promptChoices()
} //CHECK

// View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.
const showBudget = async () => {}
