const express = require("express");
// const ejs = require("ejs");
const path = require("path");

const port = 3000;
const app = new express();

// path for public directory
const static_Path = path.join(__dirname , "../public");

app.use(express.static(static_Path));
app.set("view engine","ejs");



app.get("/" , (req,res) => {
    res.render("index");
})

app.get("/forecast" , (req,res) => {
    res.render("forecast");
})

app.get("/forecast", (req,res)=>{
    console.log();
    // let inputvalue = ;
    // res.render("inputvalue");
    // console.log(inputvalue)
    // console.log("hi")
})

app.listen(port , () => {
    console.log(`server started at port no : ${port}`);
})