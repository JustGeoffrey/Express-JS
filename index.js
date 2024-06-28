const express = require('express')
const path = require('path')

const PORT = 5000

const App = express()

App.use(express.json())
App.use(express.static('public'))
App.set("view engine", "ejs")
App.set('views', path.join(process.cwd(), '/views'))

App.get('/', function(req, res){
    res.render(path.join(__dirname, "views/index"), {
        "myJson" : ["Anjali", "Geoffrey", "Elias"]
    })
})

App.post("/get-this", function(req, res){
    const body = req.body
    console.log(body)
})

App.listen(PORT, ()=>{
    console.log(`App is now running on http://localhost:${PORT}`)
})