const mongoose = require("mongoose");
const OderSchema= new mongoose.Schema({
  //   TableNumber:{
  //       type:Number
  //   },
  //  items:[
  //   {
  //     kot:{
  //       type:Number
  //     },
  //     items:[
  //       {
  //       menuname:String,
  //       price:Number,
  //       quantity:Number,
  //       }
  //     ],
  //   }
  //  ],
  //  Totalamount:{
  //   type:Number,
  //   default:0
  // }
    Phone_Number:{
       type:Number,
       required: true
    },
    Guest_Name:{
       type:String
    },
    Email:{
      type:String
    },
    Gender:{
      type:String
    },
    GSTIN:{
      type:String
    },
    DOB:{
      type:String
    },
    
  
})
const Oders = mongoose.model("Oders", OderSchema);
module.exports=Oders 