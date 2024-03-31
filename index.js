import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});

// app.get("/", (req, res) => {
//   console.log("Response from the server");
//   res.send("Response from the server");
// });
