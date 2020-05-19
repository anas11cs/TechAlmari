const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({
  name:{
    type:String,
    required:[true]
  },
  emailAddress:{
    type:String,
    required:[true]
  },
  password:{
    type:String,
    required:[true]
  }
});
// model
const User=mongoose.model('user',userSchema);
module.exports=User;
