// requiring the express module
const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express()
// requiring mongoose
const mongoose = require('mongoose');
const userRoute = require('./routes/users.js')
const authRoute = require('./routes/auth.js')


// middleware
app.use(express.json())
app.use(cors())

app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

//Connect to a MongoDB database using Mongoose: 
const database = module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try {
        mongoose.connect(process.env.MONGO_URI,
            connectionParams)
        console.log('Connected to MongoDB using Mongoose successfully');
    } catch (error) {
        console.log(error);
        console.log('Database connection failed');
    }
}
database()


// Create a Mongoose schema to define the structure of the documents in a collection:
// const mySchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });


// Create a Mongoose model based on the schema:
// const MyModel = mongoose.model('MyModel', mySchema);


// Use the model to interact with the MongoDB database, for example, to create a new document:
// const document = new MyModel({ name: 'John Doe', age: 30 });

// document.save((error) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log("Document saved to MongoDB");
//     }
// });




// Start the server on a specific port
app.listen(5500, () => {
    console.log('Social Server started');
})