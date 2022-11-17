import mysql from 'mysql2'
import inquirer from 'inquirer'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: ''
})