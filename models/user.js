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
// 1st paramenter is name of model/table and then the scehma or structure in that model/table
module.exports=User;
