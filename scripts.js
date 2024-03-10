const express = require('express')
const app = express()
const port = 3300

app.set("view engine", "ejs")

app.use(express.static('./public'))

app.get('/', function(req, res){
    res.send("Hello Server")
})

app.get('/login', function(req, res){
    res.render('login')
})

app.get('/signup', function(req, res){
    res.render('signup')
})

app.listen(port, function(){
    console.log(`Server is running on port ${port}`)
})