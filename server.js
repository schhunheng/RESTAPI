const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const cors = require("cors");
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT;
const connectDB = require("./server/database/connection");
const app = express();


app.use(cors({
  origin: '*',
  methods: ['GET',"POST","PUT","DELETE"]
}))

// Connect Database
connectDB();

// Log Request
app.use(morgan("tiny"));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: false }));
// accept json
app.use(express.json());

// load routers
app.use("/", require("./server/routes/router"));

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
