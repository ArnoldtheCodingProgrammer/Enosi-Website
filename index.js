const express = require("express")
const path = require("path")  

const app = express()

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

app.get("/dashboard", function(req, res)
{
    res.render("dashboard")
})

app.get("/faq", function(req, res)
{
    res.render("faq")
})