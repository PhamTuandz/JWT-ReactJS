import {
    createNewUser,
    getUserList
} from '../service/user.service';


const handleUser = async (req, res) => {
    let userList = await getUserList();
    return res.render('user.ejs',{userList});
}

const handleCreateUser = async (req, res) => {
    const {
        email,
        username,
        password
    } = req.body;
    createNewUser(email, username, password);
}

module.exports = {
    handleUser,
    handleCreateUser
}