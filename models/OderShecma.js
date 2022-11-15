const mongoose = require("mongoose");
const OderSchema= new mongoose.Schema({
    TableNumber:{
        type:Number
    },
   items:[
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
   Totalamount:{
    type:Number,
    default:0
  }
})
const Oders = mongoose.model("Oders", OderSchema);
module.exports=Oders 