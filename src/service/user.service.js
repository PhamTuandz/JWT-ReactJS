import bcrypt from "bcryptjs";
import mysql from "mysql2";
import db from "../models/models";

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
    console.log(hash, 'check')
    // const [rows, fields] = await connection.promise().query("INSERT INTO users (email, username, password) VALUES (?,?,?)", [email, username, hash]);
    await db.User.create({
        email: email,
        username: username,
        password: await hashPassword(password),
    });
};

const getUserList = async () => {
    //Test Relationship
    let newUser = await db.User.findOne({
        where: {
            id: 1
        },
        attributes: ["id","username","email"],
        include: {
            model: db.Group,
            attributes: ["name","description"],
        },
        raw: true,
        nest: true
    })
    let roles = await db.Role.findAll({
        include: {
            model: db.Group,
            where: {
                id: 1
            }
        },
        raw: true,
        nest: true
    })
    console.log(newUser, "Check User")
    console.log(roles, "Check roles")

    return db.User.findAll();
};

const deleteUser = async (id) => {
    // const [rows, fields] = await connection.promise().query("DELETE FROM users WHERE id = ?", [id]);
    await db.User.destroy({
        where: {
            id: id
        }
    });
};

const updateUser = async (id, email, username, password) => {
    let user = await db.User.findOne({
        where: {
            id: id
        }
    });
    // let hash = await hashPassword(password);
    // const [rows, fields] = await connection.promise().query("UPDATE users SET email = ?, username = ?, password = ? WHERE id = ?", [email, username, hash, id]);

}

module.exports = {
    createNewUser,
    getUserList,
    deleteUser
};