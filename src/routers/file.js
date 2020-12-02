const express = require('express')
const multer = require('multer')
const File = require('../models/file')
const router = new express.Router()

router.post('/files', async (req, res) => {
    const fileName = new File(req.body)

    try{

        await fileName.save()
        res.status(201).send({ files })

    }catch(e){
        res.status(400).send(e)
    }
})

const upload = multer({

   limits: {
       fileSize: 10000000
   } 
})

router.post('/files/data', upload.single('data'), (req, res) => {

    req.fileName.data = req.file.buffer
    req.fileName.save()
    res.send()
    },
    (error, req, res, next) => {
    console.log(error)
    res.status(400).send({error:error.message})
})

// router.delete('/users/me/avatar', auth, async (req, res) => {
//     req.user.avatar = undefined
//     await req.user.save()

//     res.send()
// })

// router.get('/:id/avatar', async (req, res) => {
    
//     try{

//         const user = await User.findById(req.params.id)
//         if(!user || !user.avatar){
//             res.staus(401).send({error:'Does not exist.'})
//         }

//         res.set('Content-Type', 'image/png')
//         res.send(user.avatar)

//     }catch(e){

//             res.status(404).send()

//     }req.user.avatar = undefined

//     await req.user.save()
//     res.send()
// })

module.exports = router