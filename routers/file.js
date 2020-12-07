const express = require('express')
const multer = require('multer')
const File = require('../models/file')
const router = new express.Router()


const upload = multer({
    // dest:'Files'
})

//@POST 
//Allows us to post the file to the node-server
router.post('/files', upload.single('file'), (req, res) => {

    //const data = new File(req.body)
    const fileName = new File({
        name: req.file.originalname 
    });
    const fileContent = new File(req.file);
    try{

        fileName.save()
        res.status(201).send({ fileName })
        //console.log(req.file.originalname)
    }catch(e){
        res.status(400).send(e)

    } 
})

//@GET
//Allows us to get all the file names
router.get('/files', async (req, res) =>{
    const getAllFiles = await File.find({});

    try {
      res.send(getAllFiles);
    } catch (e) {
      res.send("No files in the database.");
    }
})

//@GET
//Allows us to get the file by their individual name
router.get('/files/:filename', async (req, res) => {
    
    const filename = req.params.filename

    try{

        const getFile = await File.find({ name: filename })
        if(!getFile){
            res.staus(401).send({error:'File does not exist.'})
        }
        res.send(getFile)
    }catch(e){
            res.status(401).send()
    }
})

module.exports = router