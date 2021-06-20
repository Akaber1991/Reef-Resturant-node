const generalDB=require ('../../../generalDB.js');

module.exports.FooterItems = ()=> {
  return generalDB.query("SELECT * FROM menu_items INNER JOIN menu_list ON menu_list.id=menu_items.menu_id WHERE menu_id=2 AND menu_id=3 " );
  // return(articalesJson)
}
