const express=require('express');
const router=express.Router();

// product
const Product=require('../models/product');

// GetAllProducts
router.get('/products',function(req,res,next){
  Product.find({}).then(function(products){
      res.send(products);
  });
});

// GetProductById
router.get('/products/:id',function(req,res,next){
  Product.findById(req.params.id).then(function(products){
      res.send(products);
  }).catch(next);
});

// Adding a new product to database
router.post('/products',function(req,res,next){
Product.create(req.body).then(function(product){
  res.send(product);
}).catch(next);
});




// get a list of ninjas from database
// router.get('/ninjas',function(req,res,next){
  // res.send({
  //   type:"GET",
  // });
// Ninja.find({}).then(function(ninjas){
// res.send(ninjas);
// router.get('/ninjas', (req, res, next) => {
//     const { lng, lat } = req.query;
//     Ninja.aggregate([
//         {
//             $geoNear: {
//                 near: { type: "Point", coordinates: [parseFloat(lng), parseFloat(lat)] },
//                 maxDistance: 100000,
//                 distanceField: "dist.calculated",
//                 includeLocs: "dist.location", // Returns distance
//                 spherical: true
//             }
//         }
//     ]).then(ninjas => res.send(ninjas));
// });
//
//
//
//
//
// // adding a new ninja to database
// router.post('/ninjas',function(req,res,next){
// // var ninja=new Ninja(req.body);
// // ninja.save();
// // alternative and short of above and 'create' is mongoose method and returns promise
// Ninja.create(req.body).then(function(ninja){ // return ninja that it has removed
//   res.send(ninja);
//   // next function here says to move on to ['next' middleware] when error occurs i.e implemented in index.js
// }).catch(next);
// });
// /*
// BELOW CODE IS COMMENTED AS IT CAN RUN IF ninja.create have not completed i.e bad practice
// So we replace it with 'then' function that runs when the respective method is completed
// */
// // res.send({
// //   type:"POST",
// //   name:req.body.name,
// //   rank:req.body.rank
// // });
//
//
//
//
//
// // updating new ninja in database
// router.put('/ninjas/:id',function(req,res,next){
//   Ninja.findByIdAndUpdate({_id:req.params.id},req.body).then(function(ninja){ // req.body here contains ninja to replace
//       Ninja.findOne({_id:req.params.id}).then(function(ninja){
//               res.send(ninja);
//       });
//   }).catch(next);
// });
// // delete ninja from database
// router.delete('/ninjas/:id',function(req,res,next){
//   Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
//       res.send(ninja);
//   }).catch(next);
//   //console.log(req.params.id);// id is written according to as /ninjas/:"id"
// });


// exporting the routes defined above in "router" to import it
module.exports=router;
