const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    link: [{ type: Schema.Types.ObjectId, ref: 'Link' }]
})

module.exports = model('User', userSchema)
