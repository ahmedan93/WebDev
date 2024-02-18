import express from 'express';
import bodyParser from 'body-parser';

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  res.render("index.ejs", {fName: req.body.fName, lName: req.body.lName});
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
});