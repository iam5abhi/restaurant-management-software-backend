const Table =require('../../models/TableSchema')




exports.AddTable=(req,res,next)=>{
    let table=parseInt(req.body.totalTable)
    let TableNumber = [];
    for (let i=1;i<=table;i++){
        let data ={
           TableNumber:`${i}`
        }
        TableNumber.push(data);
        
    }

    Table.insertMany(TableNumber)
    .then((data)=>{
        res.status(200).json({
            data:data
        })
    })
    .catch((err)=>{
        console.log(err.message)
    })

}



exports.getAllTable=(req,res,next)=>{
    Table.find({},(err,data)=>{
        if(!data){
            res.status(404).json({
                message:"Table is not availble"
            })
        }

        res.status(200).json({
            data:data
        })
    })
}

exports.TableBilling=async(req,res,next)=>{
     const data = req.body
     let Totalprice = data.reduce(function(prev, cur) {
         return prev +cur.price*1;
       }, 0);

 const daa=await Table.findOne({TableNumber:req.params.id})
  for(let i=0;i<data.length;i++){
    console.log(data[i].price)
   Table.updateOne({TableNumber:req.params.id},{$push:{items:{menuname:data[i].menuname,price:data[i].price,quantity:data[i].quantity}}},{new: true, upsert: true},function(err,data){})
  }

  Table.updateOne({TableNumber:req.params.id},{$set:{Totalamount:daa.Totalamount+Totalprice}},{new: true, upsert: true},function(err,data){
    if(!data){
        res.status(400).json({
            message:"item is not added"
        })
    }
    res.status(200).json({
        message:"susscessfully",
        data:data
    })
  })
}




exports.getTableBilling=(req,res,next)=>{
  Table.findOne({TableNumber:req.params.id},function(err,tableBilling){
    if(!tableBilling){
        res.send('err')
    }

   res.status(200).json({
    tableBilling
   })
  })
}