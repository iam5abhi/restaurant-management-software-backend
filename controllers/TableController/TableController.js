const Table =require('../../models/TableSchema')
const Oders =require('../../models/OderShecma')




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

   const tableData= await Table.findOne({TableNumber:req.params.id})
       const update_data={
           kot:tableData.items.length*1+1*1,
           items:data
       }
  Table.updateOne({TableNumber:req.params.id},{$push:{items:update_data}},{new: true, upsert: true},function(err,data){})

 Table.updateOne({TableNumber:req.params.id},{$set:{Totalamount:tableData.Totalamount+Totalprice}},{new: true, upsert: true},function(err,data){
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


exports.Settle =(req,res,next)=>{ 
    console.log(req.body,"body")
//    const odersdata={
//     TableNumber:req.body.TableNumber,
//     items:req.body.items,
//     Totalamount:req.body.Totalamount
//    }

//    const oders =new Oders(odersdata)
//    oders.save((err,data)=>{
//     Table.updateOne({TableNumber:req.params.id},{$set:{items:[],Totalamount:0}},{new: true, upsert: true},function(err,data){})
//     if(err){
//       console.log(err.message)
//     }
//     res.status(200).json({
//       data:data
//     })
//  })

}