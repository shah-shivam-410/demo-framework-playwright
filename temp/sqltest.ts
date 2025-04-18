import * as mysql from 'mysql';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });
// console.log(process.env);
var connection = mysql.createConnection({
    host: process.env.AUTO_DB_HOST,
    user: process.env.AUTO_DB_USER,
    password: process.env.AUTO_DB_PASSWORD,
    database: process.env.AUTO_DB_NAME
});

connection.connect();

connection.query('SELECT * from s_users', (err, rows) => {
    if (err) throw err;
    console.log(rows);
});
connection.end();