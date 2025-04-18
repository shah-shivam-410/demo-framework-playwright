import mysql from 'mysql2/promise';

const autoDbConnObject = {
    host: process.env.AUTO_DB_HOST,
    user: process.env.AUTO_DB_USER,
    password: process.env.AUTO_DB_PASSWORD,
    database: process.env.AUTO_DB_NAME
};

const appDbConnObject = {
    host: process.env.APP_DB_HOST,
    user: process.env.APP_DB_USER,
    password: process.env.APP_DB_PASSWORD,
    database: process.env.APP_DB_NAME
}

async function createConnection(dbConnObject: 'auto' | 'app') {
    if (dbConnObject === 'auto') {
        return mysql.createConnection(autoDbConnObject);
    } else if (dbConnObject === 'app') {
        return mysql.createConnection(appDbConnObject);
    } else
        throw new Error('Invalid connection name');
}

async function getValidAppEmailPassword() {
    const autoDbConn = await createConnection('auto');
    const [rows] = await autoDbConn.execute("SELECT user_email, user_password from s_users where user_name = 'Shivam'")
    await autoDbConn.end();
    return [rows[0]?.user_email, rows[0]?.user_password];
};

export { getValidAppEmailPassword };