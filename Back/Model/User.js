var mongoose =require('mongoose');

var Schema =mongoose.Schema;

const bcrypt = require('bcrypt');

var User= new Schema({
    FullName: {
        type: String,
        required: true
    },

    email:{
        type:String,
        required:true
    },
    password:{
        type : String ,
        required : true
    },
    role:{
        type : String ,
        enum : ['ADMIN','USER'],
        required:true 
    },
    photo:{
        type:String,
        default:"https://t4.ftcdn.net/jpg/00/32/90/45/360_F_32904522_rB7stqckrXluy8QKMQj4veFHNjeIJ3c1.jpg"
    }, 
    Adresse:{
        type : String,
        required:true 
       
    },
    Phone:{
        type:Number,
        required:true 
        
    },
    reservation:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'hotel'
        
    }
},{ timestamps : true });
User.virtual('Password').set(function(Password){
    this.password = bcrypt.hashSync(Password,10)
    console.log(this.password)
})
User.methods = {
    authenticate : function(password){
        return bcrypt.compare(password,this.password)
    }
}

module.exports=mongoose.model('user',User);