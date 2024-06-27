import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        // required: true
    },
    img:{
        type: String,
        default: ""
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    
},
{timestamps: true}
);
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true,
    },
    userId:{
        type: String,
        required: true
    },
    img:{
        type: String,
        default: ""
    },
    slug:{
        type: String,
        required: true,
        unique: true

    },
  },
   {timestamps: true}
);
const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String
       
    },  
    message:{
        type: String,
        required: true
    },
},
{timestamps: true}
);
export const Message = mongoose.models.Message|| mongoose.model("Message", messageSchema);
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
