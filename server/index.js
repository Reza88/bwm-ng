const express = require('express'); 
const mongoose = require('mongoose'); 
const config = require('./config/dev'); 
const Rental = require('./models/rental'); 
const FakeDb = require('./models/fake-db'); 
const rentalRoutes = require('./routes/rentals'); 

//first cb executed when the connection is successful, if not then second db. 
mongoose.connect(config.DB_URI).then(()=>{
    const fakeDb = new FakeDb(); 
    fakeDb.seedDb(); 
}); 

const app = express(); 
app.use('/api/v1/rentals',rentalRoutes); 

const PORT = process.env.PORT || 3001; 
app.listen(3001,function(){
    console.log('I Am Running'); 
}); 