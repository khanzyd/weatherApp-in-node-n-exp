let data = {
    default : {
        background : "images/default background.webm",
        icon : `fa-solid fa-volcano`
    },

    Clear : {
        background : "images/clear background.webm",
        icon : `fa-solid fa-sun`
    },

    Sunny : {
        background : "images/sunny background.mp4",
        icon : `fa-solid fa-sun`
    },

    Clouds : {
        background : "images/cloudy background.webm",
        icon : `fa-solid fa-cloud`
    },

    Haze : {
        background : "images/fog background.mp4",
        icon : `fa-solid fa-smog`
    },

    Fog : {
        background : "images/fog background.mp4",
        icon : `fa-solid fa-smog`
    },

    Snow : {
        background : "images/fog background.mp4",
        icon : `fa-solid fa-snowflake`
    },
    
    Mist : {
        background : "images/fog background.mp4",
        icon : `fa-solid fa-smog`
    },
}

let card_Data = [
    {
       imgSrc : "images/sunny-road.jpg",
       imgAlt : "Tokyo",
       temp : 38,
       icon : "fa-solid fa-sun fa-bounce",
       iconColor : "color: rgb(246, 183, 36);",

       tittle : "Sunny",
       ltn : "Tokyo, JP"
    },

    {
        imgSrc : "images/stormy-2.jpg",
        imgAlt : "Beijing",
        temp : 27,
        icon : "fa-solid fa-cloud-bolt fa-bounce",
        iconColor : "color: #a7a7a7;" ,
        tittle : "Stormy",
        ltn : "Beijing, CH"
     },
    
    {
        imgSrc : "images/mumbai-rain.jpg",
        imgAlt : "Mumbai",
        temp : 22,
        icon : "fa-solid fa-cloud-showers-heavy fa-bounce",
        iconColor : "color: #ebebeb;",
        tittle : "Rainy",
        ltn : "Mumbai, IN"
     },
 
     {
        imgSrc : "images/foggy.jpg",
        imgAlt : "Kashmir",
        temp : 16,
        icon : "fa-solid fa-smog fa-bounce",
        iconColor : "color: #ffffff;",
        tittle : "Foggy",
        ltn : "Kashmir, IN"
     },
 
     {
        imgSrc : "images/snowy.jpg",
        imgAlt : "Britain",
        temp : 2,
        icon : "fa-solid fa-snowflake fa-bounce",
        iconColor : "color: #fcfcfc;" ,
        tittle : "Snowy",
        ltn : "Britain, EN"
     },
 
     {
        imgSrc : "images/pleasant.jpg",
        imgAlt : "Norway",
        temp : 31,
        icon : "fa-solid fa-sun fa-bounce ",
        iconColor : "color: rgb(246, 183, 36);",
        tittle : "Pleasant",
        ltn : "Norway"
     },

     {
         imgSrc : "images/stormy-2.jpg",
         imgAlt : "Beijing",
         temp : 27,
         icon : "fa-solid fa-cloud-bolt fa-bounce",
         iconColor : "color: #a7a7a7;" ,
         tittle : "Stormy",
         ltn : "Beijing, CH"
      },
 
      {
         imgSrc : "images/foggy.jpg",
         imgAlt : "Kashmir",
         temp : 16,
         icon : "fa-solid fa-smog fa-bounce",
         iconColor : "color: #ffffff;",
         tittle : "Foggy",
         ltn : "Kashmir, IN"
      },
    
      {
          imgSrc : "images/mumbai-rain.jpg",
          imgAlt : "Mumbai",
          temp : 22,
          icon : "fa-solid fa-cloud-showers-heavy fa-bounce",
          iconColor : "color: #ebebeb;",
          tittle : "Rainy",
          ltn : "Mumbai, IN"
       },
 
     {
        imgSrc : "images/sunny-road.jpg",
        imgAlt : "tokyo",
        temp : 38,
        icon : "fa-solid fa-sun fa-bounce ",
        iconColor : "color: rgb(246, 183, 36);",
        tittle : "Sunny",
        ltn : "Tokyo, JP"
     }
] 


module.exports = {dataObject : data , card_Data : card_Data};