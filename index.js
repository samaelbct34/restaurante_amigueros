// console.log("hola soy mensage")

// servidor exprexx para q nos ayude con el ruteo
const express = require ("express")
const corss = require("cors")

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// es una dependecia q nos permite q cualquier persona pueda conectarse a nuestra api
app.use(cors())

app.listen(3000,(err)=>{
    if(err) console.log("an error ocurrend")
    console.log("server running on port 3000")
})