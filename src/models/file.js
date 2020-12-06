const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({

    name:{
        type: String,
        required:true,
        trim:true
    },
    data:{
        type:String
    }
 
}, {

    timestamps:true

})

const File = mongoose.model('File', fileSchema)


module.exports = File

