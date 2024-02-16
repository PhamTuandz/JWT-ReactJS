const handleHome = (req, res) => { 

    return res.render('home.ejs',{name:"Tuan Pham"});
 }

 module.exports = { handleHome}