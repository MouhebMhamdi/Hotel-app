var mongoose =require('mongoose');

var Schema =mongoose.Schema;
var Hotel= new Schema({
    name:{
        type:String,
        required:true
    },
    adresse:{
        type:String,
        required:true
    },
    phone:{
         type:Number,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    nbr_rooms:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    photo:{
        type:String,
        default:"https://media.hrs.com/media/image/01/99/b7/hotel-dummy.png"
    },
    User:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    stars:{
         type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('hotel',Hotel);