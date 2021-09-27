const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000;
const { MongoClient } = require('mongodb');
require('dotenv').config()



const uri = `mongodb+srv://${process.env.DbUser}:${process.env.RRUNmongodbPass}@cluster0.dibao.mongodb.net/${process.env.SixtyNinethStreet}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });




const app = express();
app.use(cors());
app.use(bodyParser.json());



client.connect(err => {
    const collection = client.db("SixtyNinethStreet").collection("Property");



    console.log('Database Connected bro');
  });


app.get('/',(req, res)=>{
    res.send('hello world');
});

app.listen(process.env.PORT || port);