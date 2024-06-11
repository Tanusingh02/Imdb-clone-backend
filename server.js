require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dbConnect = require('./dbConnect')
const movieRoutes = require("./routes/movies");

app.use(express.json());
app.use(cors());

dbConnect();

app.use("/api", movieRoutes);
const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`listening on ${port}`);

})
