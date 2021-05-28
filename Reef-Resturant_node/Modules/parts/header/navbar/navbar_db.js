const generalDB=require ('../../../../generalDB.js');

module.exports.NavbarItems = ()=> {
  return generalDB.query("SELECT * FROM menu_items" );
  // return(articalesJson)
}
