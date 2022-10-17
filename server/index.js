/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require("dotenv").config();

const { json } = require("express");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

const {
  pushTheDaysCommit,
} = require("./controllers/github/index");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../", "client", "dist", "index.html"))
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.get("/post-events", async (req, res) => {
  try {
    await pushTheDaysCommit()
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
