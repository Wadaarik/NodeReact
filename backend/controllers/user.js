const bcrypt = require('bcryptjs')
const { request } = require('../app')
const User = require('./../models/user')
const jsontoken = require('jsonwebtoken')

exports.signup = (req,res,next) =>{
    console.log('begin sign')
    if(req.body.pseudo === '' || req.body.email === '' || req.body.password === ''){
        return res.status(422).json({error: "Aucun champs ne peut être vide."})
    }
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            console.log('1')
            const user = new User({
                pseudo:req.body.pseudo,
                email:req.body.email,
                password: hash
            })  
            user.save()
                .then(()=> res.status(201).json({message: "Création d\'un utilisateur réussi."}))
                .catch(error=> res.status(422).json({error: "Ce mail est déjà utilisé pour un compte."}))
        })
        .catch(error=> res.status(500).json({error}))
}

exports.login = (req,res,next) => {
    User.findOne({email: req.body.email})
        .then(user=>{
            if(!user){
                return res.status(422).json({error: "Le mail ou le mot de passe n\'est pas bon. Merci de vérifier."})
            }
            bcrypt.compare(req.body.password, user.password)
                .then(ok =>{
                    if(!ok){
                        return res.status((422).json({error: "Le mail ou le mot de passe n\'est pas bon. Merci de vérifier."}))
                    }
                    res.status(200).json({
                        userId: user._id,
                        pseudo: user.pseudo,
                        token: jsontoken.sign(
                            {userId: user._id},'jesuissecret',{ expiresIn:'48h'}
                        )
                    })
                })
                .catch(error=> res.status(500).json({error}))
        })
}