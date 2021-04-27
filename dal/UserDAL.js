const mysql = require('../helper/db');
const Company = require('../models/Company');
const User = require('../models/User');


const company = new Company();
const user = new User();

module.exports = class UserDB {
    createUser(user, res){
        mysql.query("INSERT INTO user (company_id, name, surname, email, password, is_active, modified_time, created_time) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())", [user.getCompanyId(), user.name, user.surname, user.email, user.getPassword(), 1], (err, result) => {
            if(err) throw err;
            user.setId(result.insertId);
            res(user);
        });
     }

     getById(id, res){
        mysql.query(`SELECT ${user.userSql()}, ${company.companySql()} FROM user LEFT JOIN company ON user.company_id = company.id WHERE user.id = ?`, [id], (err, result) => {
            const _company = company.companyResult(result[0]);
            const _user = user.userResult(result[0]);
            _user.setCompany(_company);
            res(_user);
        });
    }
}


