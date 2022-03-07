const {createConnection} = require('mysql')
const util = require('util')

const connection = createConnection({

    port: 3306,
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "employees"

})

connection.connect(function(err){

    if(err) throw err;

})

connection.query = util.promisify(connection.query)

module.exports = {

    findAllRoles: function(){
        return connection.query('SELECT * FROM role')
    },
    
    findAllEmployees: function (){
        return connection.query('SELECT * FROM employee')
    },

    findAllDepartments: function(){
       return connection.query('SELECT * FROM department')
    },

    createDepartment: function(data){
        return connection.query('INSERT INTO department SET ?', data)
    },

    createRole: function(data){
        return connection.query('INSERT INTO role SET ?', data)
    },

    createEmployee: function(data){
        return connection.query('INSERT INTO employee SET ?', data)
    },

    removeDepartment: function(ID){
        return connection.query('DELETE FROM department WHERE id = ?', ID)
    },

    removeRole: function(ID){
        return connection.query('DELETE FROM role WHERE id = ?', ID)
    },

    removeEmployee: function(id){
        return connection.query(`DELETE FROM employee WHERE id = ?`, id)
    },

    findAllPossibleManagers: function(ID){
        return connection.query('SELECT * FROM employee WHERE id != ?', ID)
    },

    findAllEmployeesByDepartment: function(ID){
        return connection.query(`SELECT employee.first_name, employee.last_name, 
                                role.title, department.name AS department FROM employee 
                                LEFT JOIN role ON employee.role_id = role.id
                                LEFT JOIN department ON role.department_id = department.id
                                WHERE department.id = ?`, ID)
    },

    updateEmployeeRole: function(a, b){
        return connection.query(`UPDATE employee SET role_id = ? WHERE id = ?`, [b, a])
    },

    findAllEmployeesByManager: function(ID){
        return connection.query('SELECT * FROM employee WHERE manager_id = ?', ID)
    },

    updateEmployeeManager: function(ID1, ID2){
        return connection.query(`UPDATE employee SET manager_id = ? WHERE id = ?`, [ID2, ID1])
    },

}