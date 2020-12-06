const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({

    name:{
        type: types.String,
        required:true,
        trim:true
    },
    data:{
        type:Buffer
    }
 
}, {

    timestamps:true

})

const File = mongoose.model('File', fileSchema)


module.exports = File

