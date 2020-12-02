const express = require('express')
const multer = require('multer')
const File = require('../models/file')
const router = new express.Router()


// router.post('/u', async (req, res) => {
//     const user = new User(req.body)

//     try{

//         await user.save()
//         sendWelcomeEmail(user.email, user.name)
//         const token = await user.generateAuthToken()
//         res.status(201).send({ user, token})

//     }catch(e){
//         res.status(400).send(e)
//     }
// })

const upload = multer({
    dest:'Public'
})

router.post('/files', upload.single('file'), (req, res) => {

    const data = req.file
    console.log(data)
    
    // try{

    //     data.save()
    //     res.status(201).send({ data })
    //     console.log(req.file.originalname)
    // }catch(e){
    //     res.status(400).send(e)
    //     console.log(e)
    // } 
})

// router.get('')

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