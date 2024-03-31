import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import PostRoute from "./routes/PostRoute.js";

//to create express app instance
const app = express();

//to connect to mongo db
//mongoose.connect(uri, options);  //there are many options - need to pick them according to the requirement
try {
  mongoose.connect("mongodb://0.0.0.0:27017/data-fetch-db");
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

// connection events - ex. connected, open, disconnected, close, error etc
// to listen to the events - when something happens after establishing the connection
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());

//list all the API routers here
app.use(PostRoute);

//server listens to the given port
const port = 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});

// app.get("/", (req, res) => {
//   console.log("Response from the server");
//   res.send("Response from the server");
// });
