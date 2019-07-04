const mysql = require('mysql');

class SQL {
    constructor(host, user, password, database) {
        this.connection = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });
    };
    insert(name, email, telephone, password, lastName) {
        this.connection.query(`INSERT INTO user SELECT '${name}','${email}','${telephone}','${password}','${lastName};'`, (error, results) => {
            if (error) throw error;
        });
    };
    fetch(email) {
        return new Promise((resolve, reject) => {
            this.connection.query(`SELECT * FROM user WHERE email='${email}'`, (err, results) => {
                if (err) reject(err);
                resolve(results[0]);
            });
        });
    }
}


module.exports = SQL