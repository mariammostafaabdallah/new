const express=require("express");
const app=express();
const mongoose=require("mongoose");
const cors=require("cors");
const productRoute =require("./routes/productRoute");
const contentRoute =require("./routes/contentRoute");
const Product=require('./models/Product');


mongoose.connect('mongodb+srv://mariammostafa72000:jdEhasU8qyqfWsMz@cluster0.gkbrbc1.mongodb.net/Shop').then(function(data)
{
console.log("connected")
}).catch(err=>{
    console.log(err)
});
app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/Products",productRoute);
app.use("/api/Content",contentRoute);
app.get("/test",(req,res)=>{
    res.json({msg:"hello your app is running"})
});
app.get("/allprd",   async function (req, res) {
    const products =  await Product.find({});
    res.json({
        message: "all product",
        status: 200,
        data: products,
        success: true,
    });
});



app.listen(5000||process.env.PORT,()=>{
    console.log("server is  running");
})
