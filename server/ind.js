import mongoose from "mongoose";
import express from "express";
const app = express();


var url = "mongodb+srv://ashish:hello@cluster0.nq7bi.mongodb.net/?retryWrites=true&w=majority"
var PORT = 8000
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));