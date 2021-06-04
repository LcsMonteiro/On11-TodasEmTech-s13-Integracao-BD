const mongoose = require("mongoose")

const connect = ()=>{mongoose.connect("mongodb://localhost:27017/livros",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Mongo db conectado")).catch(err =>console.err)
}

module.exports = {connect}