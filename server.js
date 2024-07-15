const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
//env file
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//routes
app.get('/', (req,res) =>{
    res.send("<h1>Hello world</h1>");
})

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
