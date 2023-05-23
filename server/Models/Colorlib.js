const mongoose = require('mongoose');
const colorlibSchema = new mongoose.Schema({
    Body:String,
    Title:String,
    Likes:Number,
    ImageURL:String
});

const Colorlib = mongoose.model('Colorlib', colorlibSchema);

module.exports=Colorlib