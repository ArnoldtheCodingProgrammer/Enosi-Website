const express = require("express")
const path = require("path")  

const app = express()

app.use(express.urlencoded({extended: true})) 
app.use(express.static(path.join(__dirname, "/public"))) 
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.listen(3001, function()
{
    console.log("Listening on Port 3001")
})

app.get("/", function(req,res)
{
    res.render("home")
})

app.get("/getstarted", function(req, res)
{
    res.render("getstarted")
})

app.get("/about", function(req, res)
{
    res.render("about")
})

app.get("/powertracer", function(req, res)
{
    res.render("powertracer")
})

app.get("/form", function(req,res)
{
    res.render("form") 
})

app.get("/faq", function(req, res)
{
    res.render("faq")
})

app.post("/form", function(req, res)
{
    const {energycompany, solarpanel, smartmeter} = req.body
    global.solarpanel = solarpanel
    global.smartmeter = smartmeter
    global.energycompany = energycompany
    if (energycompany === "Energy Local" || energycompany === "Energy Locals")
    {

        res.redirect("onlyneedpowertracer")
    }
    else if (energycompany === "Next Business Energy")
    {
        res.redirect("onlyneedpowertracer")
    }
    else
    {
        res.redirect("chooseenergyprovider")
    }

})

app.get("/chooseenergyprovider", function(req,res)
{
    res.render("chooseenergyprovider")
})

app.get("/onlyneedpowertracer", function(req,res)
{
    const solar = solarpanel
    const status = smartmeter
    res.render("onlyneedpowertracer", {status, solar})
})

app.get("/paymentyes", function(req,res)
{
    const company = energycompany
    res.render("paymentyes", {company})

})

app.get("/congrats", function(req,res)
{
    res.render("congrats")
})

app.get("/contactus", function(req, res)
{
    res.render("contactus")
})

app.get("/nextbusinessenergy", function(req, res)
{
    res.render("nextbusinessenergy")
})