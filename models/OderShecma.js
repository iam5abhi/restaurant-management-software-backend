const mongoose = require("mongoose");
const OderSchema= new mongoose.Schema({
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
    GSTIN:{
      type:String
    },
    DOB:{
      type:String
    },
    Anniversary_Date:{
      type:String
    },
    Address:{
       type:String
    },
    gender:{
      type:String
    },
    oderdata:[
      {
        kot:{
          type:Number
        },
        items:[
          {
          menuname:String,
          price:Number,
          quantity:Number,
          }
        ],
      }
    ],
    TableNumber:{
      type:Number
    },
    Totalamount:{
       type:Number
    },
    payment:{
      type:String
    }
})
const Oders = mongoose.model("Oders", OderSchema);
module.exports=Oders 