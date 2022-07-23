const Hotel =require('../Model/Hotel');

exports.add = async(req,res) => {
    const _hotel=new Hotel(req.body);
    _hotel.save((error,Hotel)=>{
        if(error){
            return res.status(400).json({ error });
        }else{
            return res.status(200).json({Hotel:Hotel});
        }
    })
}


exports.getAll = async(req,res) => {
    await Hotel.find({}).exec((error,Hotel)=>{
        if(error){
            return res.status(400).json({ error });
        }else{
            return res.status(200).json(Hotel);
        }
    })
}