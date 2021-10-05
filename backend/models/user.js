const mongoose = require('mongoose')
const uniValid = require('mongoose-unique-validator')

const userModel = mongoose.Schema({
    pseudo: {type: String, require:true, unique: true},
    email: {type: String, require:true, unique: true},
    password: {type: String, require:true}
})

userModel.plugin(uniValid)

module.exports = mongoose.model('User', userModel)