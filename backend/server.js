// "experss": "0.0.1-security",
import express from 'express';
import  mongoose  from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path:'../env'});
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';

const app = express();
app.use(express.json()); //parsing http request
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/tcart',{
//     useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true
})



app.use('/api/users',userRouter);

app.use('/api/products',productRouter);

app.use("/api/orders",orderRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });  //server error
  });


const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});