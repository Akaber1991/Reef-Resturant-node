const jsonBusiness=require ('./business.json');



module.exports.BusinessPage = (req,res) => {
    res.json(jsonBusiness)
}
