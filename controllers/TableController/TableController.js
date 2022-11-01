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

exports.TableBilling=(req,res,next)=>{
const data = req.body
let Totalamount = data.reduce(function(prev, cur) {
    return prev +cur.price*1;
  }, 0);

  const updateData={
    items:data,
    Totalamount:Totalamount
  }

  Table.findByIdAndUpdate({TableNumber:req.params.id},{$set:updateData},function(err,bill){
     if(err){
        res.send("err")
     }
     res.status(200).json({
        message:"bill genertated sucssfully",
      })
  })

}




exports.getTableBilling=(req,res,next)=>{

}