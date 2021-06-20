const NavbarDB= require('./navbar_db.js');



module.exports.Navbar =(req) => {
    return(NavbarDB.NavbarItems(req))
}
