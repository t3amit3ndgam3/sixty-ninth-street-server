const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;
const morgan = require('morgan');
require('dotenv').config();


const app = express();
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json())

//passport initialize







// Database connection
mongoose.connect(`mongodb+srv://${process.env.DbUser}:${process.env.DbPass}@cluster0.dibao.mongodb.net/${process.env.DbName}?retryWrites=true&w=majority`,{
    useNewUrlParser : true,
    useUnifiedTopology : false,
})
.then(()=> console.log('Database connection established'))
.catch(err => console.log(err))





// import routes

const propertiesRouter = require('./routers/propertiesRouter');
const agentRouter = require('./routers/agentRouter');
const reviewRouter = require('./routers/userReviewRouter');


//app middleware


//middleware
app.use('/api', propertiesRouter);
app.use('/69',agentRouter);
app.use('/69',reviewRouter);


//testing heroku deployment

app.get('/', (req, res) => {
    res.send('checking heroku deployment')
})


//default error handler

const errorHandler = (err, req, res, next) => {
    if(res.headersSent){
        return next(err)
    }
    res.status(500).json({ error:err })
}

app.use(errorHandler)





const port = 5000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
