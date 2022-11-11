const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 8000;
const DB = "productsDB";

//middle ware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to db - convention means the file that connects is in the config folder
require("./config/products.config")(DB)

//routes
require("./routes/products.route")(app)

//make sure api is up and good before making the rest of the routes
app.get("/api/demo", (req, res) => {
    res.json({ message: ("You're good") })
})
app.listen(PORT, () => console.log(`Server is up at port ${PORT}`))