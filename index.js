const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')

const Form = require('./models/form')


const app = express()

const PORT = process.env.PORT || 8080

const mongourl = 'mongodb+srv://Pabitra:12345@mernapp.v65cc.mongodb.net/bkisan?retryWrites=true&w=majority'

mongoose.connect(mongourl,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() =>{ console.log("Connected to MongoDB successfully") })
.catch(() =>{ console.log("Unable to connect to MongoDB ") })








const data = {
    OrderNo: "110101",
        Name: "Pabbi",
        Address: "tumkur",
        Tehsil: "moysore",
        District: "tumkur",
        PinCode: 572104,
        State: "karnataka",
        Whatsapp: 9876543210,
        Contact: 7259279158,
        CompanyName: "kiocl",
        Order:[
            {Details:"banana",
            Qty:100,
            Rate:3,
            Amount:68},
            { Details:"bana23",
            Qty:50,
            Rate:5,
            Amount:23}
            
        ],
       
        TotalAmt:68,
        Advance:346,
        DeliveryPlace:"Bhubaneswar",
        Deposit:{
            Amount:50,
            UIRNo:456,
            Bank:"HDFC"
        },        
        AcHolder:"Purna",
        AcNo:74635342,
        IFSC:"443sitghds",
        DealerName:"damon",
        DealerContact:2356734563
}







    // const newForm2 = new Form(data)
    // newForm2.save()
    // .then(() =>{ console.log("Data has been saved")})
    // .catch(() =>{ console.log("Unable to save")})


app.get('/show',(req,res) =>{

    Form.find({ })
    .then((data) =>{ 
        console.log('Data: ',data)
        res.json(data)
     })
     .catch((error) =>{
         console.log('Error: ',error)
     })
    
})

app.use(morgan('tiny'))





app.listen(PORT, console.log(`Server is starting at ${PORT}`))