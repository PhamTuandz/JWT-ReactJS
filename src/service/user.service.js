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
    connection.query(
        "INSERT INTO users (email, username, password) VALUES (?,?,?)",
        [email, username, hash],
        (error, results, fields) => {
            if (error) {
                console.log("error", error);
            }
        }
    );
};

const getUserList = async () => {
    //  connection.query("SELECT * FROM users", (error, results, fields) => {
    //     if (error) {
    //         console.log("error", error);
    //         return []
    //     }
    //     if (results.length > 0) {
    //         return results
    //     }
    //     return results
    // });

    const [rows, fields] = await connection.promise().query("SELECT * FROM users");

    return rows;
};

module.exports = {
    createNewUser,
    getUserList,
};