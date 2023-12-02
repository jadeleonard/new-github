import mongoose, {Schema} from 'mongoose'


const userSchema = new Schema({
    id:{type:String,required:true},
    name:{type:String,required:true},
    username:{type:String,required:true},


    image:String,

    todos:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Todo',
    }],


});


const users = mongoose.models.users || mongoose.model('users',userSchema)

export default users

