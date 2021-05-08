const jsonContactUs=require ('./contact_us.json');

module.exports.contactUsPage = (req,res) => {
    res.json(jsonContactUs)
}
