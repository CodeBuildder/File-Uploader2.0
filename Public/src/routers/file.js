const express = require('express')
const multer = require('multer')
const File = require('../models/file')
const router = new express.Router()


const upload = multer({
    dest:'Files'
})

router.post('/files', upload.single('file'), (req, res) => {

    const data = new File(req.body)

    try{

        data.save()
        res.status(201).send({ data })
        console.log(req.file.originalname)
    }catch(e){
        res.status(400).send(e)
        console.log(e)
    } 
})

router.get('/files', async (req, res) =>{

    res.send(req.data)
})


router.get(`files/:filename`, async (req, res) => {
    
    try{

        const data = await File.findById(req.params.filename)
        if(!data|| !data.filename){
            res.staus(401).send({error:'Does not exist.'})
        }

        res.send(data.filename)

    }catch(e){

            res.status(404).send()

    }req.data.filename = undefined

    await req.user.save()
    res.send()
})

module.exports = router