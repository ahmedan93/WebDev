import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req);
    // console.log(res);

    const data = {
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "orange"],
        htmlContent: "<em>  This is some em content  </em>"
    }
    res.render("index.ejs", data);
});


app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});