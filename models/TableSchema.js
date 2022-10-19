const mongoose = require("mongoose");


const TableSchema = new mongoose.Schema(
    {
       TableNumber:{
           type:String
       },
      items:[{
        menuname:String,
        price:Number
      }],
      Totalamount:{
        type:String
    }
    }
   );
   
   
   
   
   const Table = mongoose.model("Table", TableSchema);
   
   module.exports=Table

