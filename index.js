const express = require("express");
const mongoose = require('mongoose');
const adminRouter = require("./routes/admin");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

const DB="mongodb://talha00069:talha00069@ac-dzyauag-shard-00-00.rcrxisk.mongodb.net:27017,ac-dzyauag-shard-00-01.rcrxisk.mongodb.net:27017,ac-dzyauag-shard-00-02.rcrxisk.mongodb.net:27017/?ssl=true&replicaSet=atlas-o82o0m-shard-0&authSource=admin&retryWrites=true&w=majority";

// middleware

const PORT =process.env;
const app = express();
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);


// Connections
mongoose.connect(DB).then(() => {
    console.log("COnnection SuCcessFull");
}).catch((e) => {
    console.log(e);
});
app.listen(PORT,"0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});

