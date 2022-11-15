const mongoose = require("mongoose");

const TableSchema = new mongoose.Schema(
    {
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
    }
   );
   const Table = mongoose.model("Table", TableSchema);
   module.exports=Table

