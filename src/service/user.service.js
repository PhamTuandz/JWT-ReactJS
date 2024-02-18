import bcrypt from "bcryptjs";
import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwt",
});

const salt = bcrypt.genSaltSync(10);

const hashPassword = async (password) => {
    return bcrypt.hashSync(password, salt);
};

const createNewUser = async (email, username, password) => {
    let hash = await hashPassword(password);
    const [rows, fields] = await connection.promise().query("INSERT INTO users (email, username, password) VALUES (?,?,?)", [email, username, hash]);
};

const getUserList = async () => {
    const [rows, fields] = await connection.promise().query("SELECT * FROM users");
    return rows;
};

const deleteUser = async (id) => {
    const [rows, fields] = await connection.promise().query("DELETE FROM users WHERE id = ?", [id]);
};

const updateUser = async (id, email, username, password) => {
    let hash = await hashPassword(password);
    const [rows, fields] = await connection.promise().query("UPDATE users SET email = ?, username = ?, password = ? WHERE id = ?", [email, username, hash, id]);

}

module.exports = {
    createNewUser,
    getUserList,
    deleteUser
};