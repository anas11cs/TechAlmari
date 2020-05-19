const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const productsInOrderSchema= new Schema({
  // productId
    productId:{
      type: mongoose.Schema.Types.ObjectId,
      // here you set the product ID,from the product collection,so you can reference it
      required:[true]
    },
    // quantity of product
    quantity:{
      type:Number,
      required:[true]
    },
    price:{
      type:Number,
      required:[true]
    },
    // total Price = quantity*price
    totalPrice:{
      type:Number,
      default:function()
      {
        return this.price*this.quantity
      },
      required:[true]
    }
});

const shippingSchema=new Schema({
  blockNumber:{
    type:String,
    required:[true]
  },
  houseNo:{
    type:Number,
    required:[true]
  },
  area:{
    type:String,
    required:[true]
  },
  city:{
    type:String,
    required:[true]
  },
  province:{
    type:String,
    required:[true]
  },
  mobileNo:{
    type:Number,
    required:[true]
  }
});

const orderSchema=new Schema({
  // user id
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    required:[true]
  },
  // order date
  // format : YYYY-MM-DD
  // https://docs.jsonata.org/date-time
  orderDate:{
    type:Date,
    required:[true],
    default:Date.now
  },
  // all products = Array Products
  allProducts:{
    type:[productsInOrderSchema],
    required:[true]
  },
  // Total Bill = Summation(total price)
  totalBill:{
    type:Number,
    required:[true]
  },
  shippingDetails:{
    type:shippingSchema,
    required:[true]
  },
  riderOrShippingNote:{
    type:String,
    required:[true]
  },
  orderStatus:{
    type:String,
    required:[true],
    default:"Initiated"
  }
});
//moddel
const Order=mongoose.model('order',orderSchema);
module.exports=Order;
