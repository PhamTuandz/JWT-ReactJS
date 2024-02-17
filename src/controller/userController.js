import  mysql from'mysql2';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'jwt'
});

const handleUser = async (req, res) => {
    return res.render('user.ejs');
}

const handleCreateUser = async (req, res) => {
    const {
        email,
        username,
        password
    } = req.body;

    connection.query('INSERT INTO users (email, username, password) VALUES (?,?,?)', [email, username, password], (error, results, fields) => {
        if (error) {
            return res.json({
                message: 'error'
            });
        }
        return res.json({
            message: 'success'
        });
    });
}


module.exports = {
    handleUser,
    handleCreateUser
}