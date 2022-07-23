var mongoose =require('mongoose');

var Schema =mongoose.Schema;

var Reservation= new Schema({
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    nbr_rooms:{

        type:Number,
        required:true
    },
    nbrShildren:{
        type:Number,
        required:true
    },
    nbrAdults:{
        type:Number,
        required:true
    }
    ,
    hotel:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'hotel',
        required:true
    }
    ,
    user:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }
})



module.exports=mongoose.model('reservation',Reservation);