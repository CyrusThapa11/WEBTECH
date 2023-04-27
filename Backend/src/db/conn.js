//db.js

const mongoose = require("mongoose");
// const pass = encodeURIComponent("codinglearner")

const url = `mongodb+srv://user2:user2@cluster0.xiftkab.mongodb.net/FirstDB?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.set("strictQuery", true);
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
