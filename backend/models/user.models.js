const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required: true,
            minLength: [3,"First name must be at least 3 characters long"]
        },
        lastname:{
            type:String,
            minLength: [3,"last name must be at least 3 characters long"]
        },

    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength: [3,"email is required"]
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    socketId:{
        type:String
    }

})


userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET)
    return token;

}

userSchema.methods.comparePassword = async (password)=>{
    return await bcrypt.compare(password,this.password)
}
userSchema.static.hashPassword = async (password)=>{
    return await bcrypt.hash(password,10)
}

const userModel = mongoose.model('user',userSchema)

module.exports = userModel;