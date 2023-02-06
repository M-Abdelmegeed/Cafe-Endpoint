const express = require("express"); // express application
require("dotenv").config(); // use the env variables
const mongoose = require("mongoose");
const router = require("./routes/index.routes"); // used to handle routes
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;
// app.use(express.json());
app.use(express.json({ limit: "50mb" }));
// app.use(
//   cors({
//     origin: [
//       "https://agile-final.netlify.app/doctor-form",
//       "https://agile-final.netlify.app",
//       "https://agile-final.netlify.app/login, https://agile-final.netlify.app/home-page, http://127.0.0.1:5500/index.html, http://127.0.0.1:5500",
//     ],
//   })
// );
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }))
app.use(router);
const uri = process.env.MONGO_DB_CONNECTION;
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("MongoDB connection successful!");
        app.listen(PORT);
      })
      .catch((err) => {
        console.error("Error connecting to the database...");
      });
  }
}
new Database();

// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
//   });

app.get("/", function (req, res) {
  res.send("Hello World");
});
