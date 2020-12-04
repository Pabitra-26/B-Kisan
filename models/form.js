const mongoose = require('mongoose');
let FormSchema = mongoose.Schema({
    OrderNo:{
        type:String,
        required:true,
        unique:true
    },
    Date:{

        type:Date,
        required:false
    },
    Name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Tehsil:{
        type:String,
        required:false
    },
    District:{
        type:String,
        required:true
    },
    PinCode:{
        type:Number,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Whatsapp:{
        type:Number,
        required:true
    },
    Contact:{
        type:Number,
        required:true,
        min : 1000000000,
        max : 9999999999
        
    },
    CompanyName:{
        type:String,
        required:true
    },
    Order:[{
        Details:{type:String, required:true},
        Qty:{type:Number, required:true},
        Rate:{type:Number, required:true},
        Amount:{type:Number,required:true}
    }],
    TotalAmt:{
        type:Number,
        required:true
    },
    Advance:{
        type:Number,
        required:true
    },
    DeliveryDate:{
        type:Date,
        required:false
    },
    DeliveryPlace:{
        type:String,
        required:true
    },
    Deposit:{
        DDate:{type:Date,required:false},
        Amount:{type:Number,required:true},
        UIRNo:{type:String,required:true},
        Bank:{type:String,required:true}

    }
    ,
    AcHolder:{
        type:String,
        required:true
    },
    AcNo:{
        type:Number,
        required:true,
        
    },
    IFSC:{
        type:String,
        required:true
    },
    DealerName:{
        type:String,
        required:true
    },
    DealerContact:{
        type:Number,
        required:true,
        min : 1000000000,
        max : 9999999999
        
    },
    


})
let Form = module.exports = mongoose.model("Forms",FormSchema);
