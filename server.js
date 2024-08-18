const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
//env file
dotenv.config();

//rest object
connectDb();
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


//user routes
app.use('/api/v1/users', require('./routes/userRoute'));

//blog route
app.use('/api/v1/blogs', require('./routes/blogRoute'));

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
