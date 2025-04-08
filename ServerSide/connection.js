const mongoose= require('mongoose');
async function mongoConn(url){
    mongoose.connect(url);
}

module.exports={
    mongoConn,
}