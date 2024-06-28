"use server"
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Message, Post,User } from "./models";
import { signIn,signOut } from "@/lib/auth";
import bcrypt from "bcryptjs";


// export const addPost = async (formData) => {
    
//     const {title, desc, slug, userId} = Object.fromEntries(formData);
//   try {
//     connectToDb();
//     const newPost = await new Post({title, desc, slug, userId});
//     await newPost.save();  
//     console.log('Post added');
//     revalidatePath('/blog');
//     }
//     catch (error) {
//         throw new Error(error);
//     }
// }; 
export const addPost = async (prevState,formData) => {

  const { title, desc, slug, userId,img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({title,desc,slug,userId,img});

    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};  

export const deletePost = async (formData) => {
   const {id}= Object.fromEntries(formData);
   
    try {
        connectToDb();
        await Post.findByIdAndDelete(id);
        console.log('Post deleted');
        revalidatePath('/blog');
    }
    catch (error) {
        throw new Error(error);
    }
};


export const addMessage = async (formData) => {
    const {name,email,phone,message} = Object.fromEntries(formData);
  try {
    connectToDb();
    const newMessage = await new Message({name,email,phone,message});
    await newMessage.save();  
    console.log('message sent');

    }
    catch (error) {
        throw new Error(error);
    }
};
export const handleGithubLogin = async() => {
    await signIn("github");
  };
  export const handleGoogleLogin =async() => {
    await signIn("google");
  };
  export const handleLogout = async() => {
    await signOut();
  };

  export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } =
      Object.fromEntries(formData);
  
    if (password !== passwordRepeat) {
      return { error: "Passwords do not match" };
    }
  
    try {
      connectToDb();
  
      const user = await User.findOne({ username });
  
      if (user) {
        return { error: "Username already exists" };
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });
  
      await newUser.save();
  
      return { success: true };
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };
  
  
  
  export const login = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
    
      
        return { error: "Invalid username or password" };
      
      throw err;
    }
  };
export const addUser = async (prevState,formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

