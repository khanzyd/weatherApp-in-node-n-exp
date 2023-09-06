const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");

const port = 3000;
const app = new express();


// importing own module for api ID
// for api ID
const ID = require("../appID");
// for forecast
const dataObject = require("../data");

// path for public directory
const static_Path = path.join(__dirname , "../public");

app.use(express.static(static_Path));
app.set("view engine","ejs");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}))

app.get("/" , (req,res) => {
    res.render("index");
})

app.get("/forecast" , (req,res) => {
    res.render("forecast",
    {
        cityName : "Mumbai, IN",
        cityDesc : "Sunny",
        cityTemp : 27,
        cityMinTemp : 23.4,
        cityMaxTemp : 32.8 ,
        backgroundSet : "images/sunny background.mp4",
        icon : `fa-solid fa-sun`
    });
})

app.post("/forecast", async (req,res)=>{
    let city_Name = req.body.formLtn;

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_Name}&units=metric&appid=${ID}`

    let data = await fetch(url);
    let obj = await data.json();
    console.log(obj)
    console.log(obj.weather[0].main)

    city_Name = `${obj.name}, ${obj.sys.country}` ;
    let city_Desc = obj.weather[0].main ;
    let city_Temp = Math.floor(obj.main.temp) ;
    let city_Mintemp = obj.main.temp_min ;
    let city_Maxtemp = obj.main.temp_max ;

    let neededData = (dataObject[city_Desc]) ? dataObject[city_Desc] : dataObject.default ;
    console.log(neededData)

    res.render("forecast" ,
    {
        cityName : city_Name,
        cityDesc : city_Desc,
        cityTemp : city_Temp,
        cityMinTemp : city_Mintemp,
        cityMaxTemp : city_Maxtemp ,
        backgroundSet : neededData.background,
        icon : neededData.icon
    })
    
})

app.listen(port , () => {
    console.log(`server started at port no : ${port}`);
})