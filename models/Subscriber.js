const {Schema, model} = require('mongoose');

const subscriberSchema = new Schema({
    name: String,
    email: String
},{versionKey: false, timestamps: true})

const Subscriber = model('Subscriber', subscriberSchema);

module.exports = Subscriber;