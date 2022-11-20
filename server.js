const inquirer = require('inquirer')
const sql = require('mysql2')
require('dotenv').config()
const cTable = require('console.table');
const connection = require('mysql2/typings/mysql/lib/Connection');

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
            'SELECT * FROM roles')
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
            'SELECT * FROM employees')
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
            'INSERT INTO department (name) VALUES ?', answers.name)
        console.table(results)
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
            type: 'list',
            name: 'name',
            message: 'Role Name:'
        }
    ])
    //////////////////////////////////
    // try {
    //     const [results] = await connection.promise().query(
    //         'INSERT INTO department (name) VALUES ?', answers.name)
    //     console.table(results)
    //     promptChoices()
    // } catch (err) {
    //     throw new Error(err)
    // }



}

const addEmployee = async () => {
    // THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
}

const updateEmployee = async () => {
    // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
}

const promptChoices = async () => {
    const choices = await inquirer.prompt([{
        type: 'list',
        name: 'choices',
        message: 'Choose an action',
        choices: ['VIEW all Departments', 'VIEW all Roles', 'VIEW all Employees', 'ADD a Department', "ADD a Role", 'ADD an Employee', 'UPDATE Employees']
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
    } else { 
        return
    }
}

// BONUS
// Update employee managers.

// View employees by manager.

// View employees by department.

// Delete departments, roles, and employees.

// View the total utilized budget of a department—in other words, the combined salaries of all employees in that department.


 /*                                                                  
_____           _                     _____                         
|   __|_____ ___| |___ _ _ ___ ___    |     |___ ___ ___ ___ ___ ___ 
|   __|     | . | | . | | | -_| -_|   | | | | .'|   | .'| . | -_|  _|
|_____|_|_|_|  _|_|___|_  |___|___|   |_|_|_|__,|_|_|__,|_  |___|_|  
            |_|       |___|                             |___|        
*/