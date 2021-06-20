const generalDB=require ('../../../../generalDB.js');

module.exports.NavbarItems = async(req)=>{
  if (req && req.session && req.session.admin === 1) {
    return await generalDB.query("SELECT *FROM menu_list INNER JOIN menu_items ON menu_list.id=menu_items.menu_id AND menu_list.id = 1");
    }
    return await generalDB.query("SELECT *FROM menu_list INNER JOIN menu_items ON menu_list.id=menu_items.menu_id AND menu_list.id = 1 AND menu_items.adminOnly=0 ");
   }
