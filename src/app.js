const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");

const port = 3000;
const app = new express();


// importing own module for api ID
// for api ID
const ID = require("../appID");
// for forecast
const {dataObject , card_Data} = require("../data");

// path for public directory
const static_Path = path.join(__dirname , "../public");

app.use(express.static(static_Path));
app.set("view engine","ejs");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}))

app.get("/" , (req,res) => {
    res.render("index",
    {
        cardData : card_Data
    });
})

app.get("/forecast" , (req,res) => {
    res.render("forecast",
    {
        cityName : "Enter Location",
        cityDesc : "--",
        cityTemp : "_",
        cityMinTemp : null,
        cityMaxTemp : null ,
        backgroundSet : "images/sunny background.mp4",
        icon : `fa-solid fa-star fa-beat-fade`
    });
})

app.post("/forecast", async (req,res)=>{
    let city_Name = req.body.formLtn;

    if(city_Name == ""){
        res.render("forecast",
        {
            cityName : "Please enter city name!",
            cityDesc : "--",
            cityTemp : "_",
            cityMinTemp : null,
            cityMaxTemp : null ,
            backgroundSet : "",
            icon : `fa-solid fa-face-frown fa-bounce`            
        })
    } else {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_Name}&units=metric&appid=${ID}`

            let data = await fetch(url);
            let obj = await data.json();

            city_Name = `${obj.name}, ${obj.sys.country}` ;
            let city_Desc = obj.weather[0].main ;
            let city_Temp = Math.floor(obj.main.temp) ;
            let city_Mintemp = obj.main.temp_min ;
            let city_Maxtemp = obj.main.temp_max ;

            let neededData = (dataObject[city_Desc]) ? dataObject[city_Desc] : dataObject.default ;

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

        } 
        catch (err){
            res.render("forecast" , 
            {
                cityName : "Enter correct city name",
                cityDesc : "--",
                cityTemp : "_",
                cityMinTemp : null,
                cityMaxTemp : null ,
                backgroundSet : "",
                icon : `fa-solid fa-face-frown fa-bounce`
            })
        }
    }
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.listen(port , () => {
    console.log(`server started at port no : ${port}`);
})