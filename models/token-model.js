const {Schema, model} = require('mongoose')

const TokenSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: "User", require: true},
    refreshToken: {type: String, require: true},
})


module.exports = model('TokenModel', TokenSchema);
