const NavbarDB= require('./navbar_db.js');



module.exports.Navbar =(req,res) => {
    return(NavbarDB.NavbarItems())
}
