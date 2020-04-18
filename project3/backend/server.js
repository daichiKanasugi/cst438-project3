const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//const uri = process.env.ATLAS_URI;

mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true  }
);

// <--Connects to the Mongo DB!! -->
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// MUST EDIT FOR ROUTE
// const itemsRouter = require('./routes/addItem');
const usersRouter = require('./routes/users');
// const cartsRouter = require('./routes/addCart');

// app.use('/item', itemsRouter);
app.use('/users', usersRouter);
// app.use('/cart', cartsRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});