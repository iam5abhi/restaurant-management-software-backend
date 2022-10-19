const mongoose = require("mongoose");




// EmployeeSchema All Field Schema with regex

const MenuSchema = new mongoose.Schema(
 {
    menuname:{
        type:String
    },
    price:{
        type:String
    }
 }
);




const Menu = mongoose.model("Menu", MenuSchema);

module.exports=Menu