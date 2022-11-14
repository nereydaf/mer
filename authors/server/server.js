const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;
const DB = "authorsDB";

//middle ware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to db 
require("./config/author.config")(DB)

//routes
require("./routes/author.route")(app)

//make sure api is up and good before making the rest of the routes
app.get("/api/demo", (req, res) => {
    res.json({ message: ("You're good") })
})

app.listen(PORT, () => console.log(`Server is up at port ${PORT}`))