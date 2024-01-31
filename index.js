const express= require("express");
const app=express();
const path=require('path');
const mongoose = require('mongoose');
const cors = require("cors");

const bodyParser=require('body-parser');

const Sing = require('./models/signin');
const Sell = require('./models/seller');
const Buy = require('./models/buyer');



// const http = require('http').Server(app);
// const io = require('socket.io')(http);



// io.on('connection', (socket) => {
//     console.log('A user connected');
//     socket.on('disconnect', () => {
//         console.log('A user disconnected');
//     });

//     socket.on('message', (message) => {
//         const response = `Chatbot: ${message}`;
//         socket.emit('botMessage', response);
//     });
// });


// const session = require('express-session');
// const flash = require('express-flash');


// function updateMenuVisibility() {
//     var role = await Sing.findOne({name:req.body.role});
//     if (role != null){  //if there is no such user in the database
//         if(role=="buyer"){
//             document.getElementById('addBu').style.visibility='visible';    
//             document.getElementById('showBu').style.display='block';
//         }else if(role=="seller"){
//             document.getElementById('addSel').style.visibility="visible";
//             document.getElementById('showSel').style.display='block';
//         }
//     }
// }

const methodOverride = require('method-override')
mongoose.connect('mongodb://127.0.0.1:27017/cogni', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use(express.json());

// const { Configuration, OpenAIApi } = require("openai");

// require("dotenv").config();

// const config = new Configuration({
//     apiKey: process.env.OPEN_API_KEY,
//   });
//   const openai = new OpenAIApi(config);
//   messages = [];

// app.post("/message", (req, res) => {
//     const message = req.body.message;
//     messages.push({
//       role: "user",
//       content: message,
//     });
//     const response = openai.createChatCompletion({
//       model: "gpt-4",
//       messages,
//     });
//     response
//       .then((result) => {
//         messages.push({
//           role: "assistant",
//           content: result.data.choices[0].message.content,
//         });
//         res.send(result.data.choices[0].message.content);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   });
// app.use(flash());
let logo=false
app.get('/', (req, res) => {
    res.render('home1',{logo})
});
app.get('/login', (req, res) => {
    res.render('mainlogin')
});

app.get('/kshitijbot', (req, res) => {
    res.render('botkshitij')
});
app.get('/buyer', (req, res) => {
    res.render('buy')
});
app.get('/seller', (req, res) => {
    res.render('seller_details')
});
app.post("/signup",async(req,res)=>{
    const data={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword,
        role: req.body.role
    }
    await Sing.insertMany([data])
    res.render("mainlogin.ejs")
})

app.post("/llogin",async(req,res)=>{
    
    try{
        const check=await Sing.findOne({name:req.body.username})
       

        if (check.password===req.body.userpass){
            console.log(check)
            // res.render('home1.ejs',{check})
            if(check.role==="buyer"){
                res.render("homeforbuy.ejs",{check})
            }
            else if(check.role==="seller"){
                res.render("homeforsell.ejs",{check})
            }
            else{
                res.render("home1.ejs",{check})
            }
            // const logo=true;
            // console.log(logo)
            

        }
        else{
            res.send("incorrect pass")
        }

    }
    catch{
        res.render("mainlogin.ejs")
    }
})
app.post("/seller_details",async(req,res)=>{

    // const ab=req.body.typeofwaste
    // console.log(ab)
    const data1={
        typeofwaste:req.body.typeofwaste,
        qty:req.body.qty,
        qotation:req.body.qotation,
        query:req.body.query,
        image:req.body.image
    }
    await Sell.insertMany([data1])
    
    res.render("home1")

   
})
app.post("/recyclable",async(req,res)=>{
    
    const data12={
        typeofwaste:req.body.typeofwaste,
        qty:req.body.qty,
        qotation:req.body.qotation,
        query:req.body.query,
        image:req.body.image
    }
    await Buy.insertMany([data12])  
    res.render("home1")
})
app.post("/non_recyclable",async(req,res)=>{
    
    const data12={
        typeofwaste:req.body.typeofwaste,
        qty:req.body.qty,
        qotation:req.body.qotation,
        query:req.body.query,
        image:req.body.image
    }
    await Buy.insertMany([data12])  
    res.render("home1")
})
app.post("/pvc",async(req,res)=>{
    
    const data12={
        typeofwaste:req.body.typeofwaste,
        qty:req.body.qty,
        qotation:req.body.qotation,
        query:req.body.query,
        image:req.body.image
    }
    await Buy.insertMany([data12])  
    res.render("home1")
})
app.post("/ps",async(req,res)=>{
    
    const data12={
        typeofwaste:req.body.typeofwaste,
        qty:req.body.qty,
        qotation:req.body.qotation,
        query:req.body.query,
        image:req.body.image
    }
    await Buy.insertMany([data12])  
    res.render("home1")
})
app.post("/pp",async(req,res)=>{
    
    const data12={
        typeofwaste:req.body.typeofwaste,
        qty:req.body.qty,
        qotation:req.body.qotation,
        query:req.body.query,
        image:req.body.image
    }
    await Buy.insertMany([data12])  
    res.render("home1")
})
app.post("/pet",async(req,res)=>{
    
    const data12={
        typeofwaste:req.body.typeofwaste,
        qty:req.body.qty,
        qotation:req.body.qotation,
        query:req.body.query,
        image:req.body.image
    }
    await Buy.insertMany([data12])  
    res.render("home1")
})
app.post("/nylon",async(req,res)=>{
    
    const data12={
        typeofwaste:req.body.typeofwaste,
        qty:req.body.qty,
        qotation:req.body.qotation,
        query:req.body.query,
        image:req.body.image
    }
    await Buy.insertMany([data12])  
    res.render("home1")
})
app.post("/ldpe",async(req,res)=>{
    
    const data12={
        typeofwaste:req.body.typeofwaste,
        qty:req.body.qty,
        qotation:req.body.qotation,
        query:req.body.query,
        image:req.body.image
    }
    await Buy.insertMany([data12])  
    res.render("home1")
})
app.post("/hdpe",async(req,res)=>{
    
    const data12={
        typeofwaste:req.body.typeofwaste,
        qty:req.body.qty,
        qotation:req.body.qotation,
        query:req.body.query,
        image:req.body.image
    }
    await Buy.insertMany([data12])  
    res.render("home1")
})
app.post("/abs",async(req,res)=>{
    
    const data12={
        typeofwaste:req.body.typeofwaste,
        qty:req.body.qty,
        qotation:req.body.qotation,
        query:req.body.query,
        image:req.body.image
    }
    await Buy.insertMany([data12])  
    res.render("home1")
})
app.get('/cart1', async (req, res) => {
    // const am=req.body.quantity
    // console.log(am)
    const ca = await Buy.find({});
    // console.log(ca._id)
        
    
        res.render('cart', { ca })
   

    
});



app.get("/seller_details",async(req,res)=>{
        a=req.body.typeofwaste;
        const check=await Sing.findOne({typeofwaste:a})

        // qty=req.body.qty;
        // qotation=req.body;
        // query=req.body.query;
        if (check){
            res.render("pp.ejs")

        }
    



})
app.get('/pay', (req, res) => {
    res.render('payment')
});
app.get('/join', (req, res) => {
    res.render('joinus')
});

// app.get('/rec', (req, res) => {

//     res.render('recyclable');
    
//     });
// app.get('/nonrec', (req, res) => {

//     res.render('non_recyclable');
        
//     });
app.get('/rec', async (req, res) => {
        const ca = await Sell.find({});
        // console.log(ca._id)
            
        
            res.render('recyclable', { ca })
       
    
        
    });
    app.get('/nonrec', async (req, res) => {
        const ca = await Sell.find({});
        // console.log(ca._id)
            
        
            res.render('non_recyclable', { ca })
       
    
        
    });
    app.get('/pet1', async(req, res) => {
        const ca = await Sell.find({});
        res.render('pet',{ca})
    });
    app.get('/pet2', async(req, res) => {
        const ca = await Sell.find({});
        res.render('hdpe',{ca})
       
    });
    app.get('/pet3', async(req, res) => {
        const ca = await Sell.find({});
        res.render('pvc',{ca})
       
    });
    app.get('/pet4', async(req, res) => {
        const ca = await Sell.find({});
        res.render('ldpe',{ca})
       
    });
    app.get('/pet5', async(req, res) => {
        const ca = await Sell.find({});
        res.render('pp',{ca})
       
    });
    app.get('/pet6', async(req, res) => {
        const ca = await Sell.find({});
        res.render('ps',{ca})
       
    }); app.get('/pet7', async(req, res) => {
        const ca = await Sell.find({});
        res.render('abs',{ca})
       
    });
    app.get('/pet8', async(req, res) => {
        const ca = await Sell.find({});
        res.render('nylon',{ca})
       
    });
  

app.get('/appli', (req, res) => {

    res.render('applications');
            
    });
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})