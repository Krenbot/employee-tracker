# Employee Tracker - CLI

## Table of Contents
  1) [Description](#description)
  2) [Technologies](#technologies-used)
  3) [Challenges](#challenges)
  4) [Future Implementations](#future-implementations)
  5) [User Story](#user-story)
  6) [Demonstration](#demonstration)
  7) [Installation](#installation)
  8) [License](#license)

## Description
Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). This project entails building a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Technologies
* [nodejs](https://nodejs.org/en/)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [inquirer](https://www.npmjs.com/package/inquirer)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [console.table](https://www.npmjs.com/package/console.table)

## Challenges
* Utilizing correct syntax withing SQL database
* Using correct schema pathing withing SQL
* Using .env files to sanitize data

## Future Implentation
* Allow users to update employee managers - IN PROGRESS
* Allow users to view employees by manager - IN PROGRESS
* Allow users to view employees by department - IN PROGRESS
* Allow users to delete departments/roles/employees - IN PROGRESS
* Allow users to view total utilized budget of a department ie: the combined salaries of all employees in that department  - IN PROGRESS

## User Story
```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Demonstration
![]()

## Installation
* For installation onto local machine, clone provided repository.
* Use `npm init` to initalize node package manager
* Use `npm install` to install dependencies.
* Use `node index.js` to initiate the server in your terminal.

## License
MIT © Krenbot