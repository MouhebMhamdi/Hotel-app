const Reservation =require('../Model/Reservation');

exports.add = async(req,res) => {
    const _reservation=new Reservation(req.body);
    _reservation.save((error,Reservation)=>{
        if(error){
            return res.status(400).json({ error });
        }else{
            return res.status(200).json(Reservation);
        }
    })
}

exports.getAllByUser = async(req,res) => {
    await Reservation.find({user:req.params.id}).populate('hotel').exec((error,Reservation)=>{
        if(error){
            return res.status(400).json({ error });
        }else{
            return res.status(200).json(Reservation);
        }
    })
}