import {
    createNewUser,
    getUserList,
    deleteUser
} from '../service/user.service';


const handleUser = async (req, res) => {
    let userList = await getUserList();
    return res.render('user.ejs', {
        userList
    });
}

const handleCreateUser = async (req, res) => {
    const {
        email,
        username,
        password
    } = req.body;
    createNewUser(email, username, password);
    return res.redirect('/user');
}

const handleDeleteUser = async (req, res) => {
    const id = req.params.id;
    await deleteUser(id);
    return res.redirect('/user');
}

module.exports = {
    handleUser,
    handleCreateUser,
    handleDeleteUser
}