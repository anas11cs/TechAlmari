const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//productSpecificationsSchema
const productSpecsSchema=new Schema({
  cableLength:{
    type: Number,
    default:null
  },
  connecterType:{
    type: String,
    default:null
  },
  dimension:{
    type: String,
    default:null
  },
  storageCapacity:{
    type: Number,
    default:null
  },
  touch:{
    type: Boolean,
    default:null
  },
  wireless:{
    type: Boolean,
    default:null
  },
  material:{
    type: String,
    default:null
  },
  additionalSpecs1:{
    type:String,
    default:null
  },
  additionalSpecs2:{
    type:String,
    default:null
  }
});

const productSchema=new Schema({
  title:{
    type:String,
    required:[true]
  },
  companyName:{
    type:String,
    default:null
  },
  price:{
    type:Number,
    required:[true]
  },
  category:{
    type:String,
    required:[true]
  },
  availability:{
    type:Boolean,
    default:true,
    required:[true]
  },
  shortDescription:{
    type:String,
    required:[true]
  },
  completeDescription:{
    type:String,
    required:[true]
  },
  colors:{
    type:[String],
    required:[true]
  },
  specs:{
    type:productSpecsSchema,
  required:[true]
  }
});
// model
const Product=mongoose.model('product',productSchema);
// 1st paramenter is name of model/table and then the scehma or structure in that model/table
module.exports=Product;
