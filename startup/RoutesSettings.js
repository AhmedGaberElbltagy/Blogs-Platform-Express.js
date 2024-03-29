const bodyParser = require("body-parser");

module.exports = (app) => {
     // Body Parser Settings: 
   app.use(bodyParser.json());
    // Required Headers: 
    app.use((req,res,next)=>{
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods","OPTIONS, GET, POST, PUT, PATCH, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        next();
    });
}