

import {Post} from "./models.js";
import {User} from "./models.js";
import { connectToDb } from "./connectToDb.js";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
// export const getSpPosts = async (formData) => {
//   const{search}=Object.fromEntries(formData)
//   try {
//     connectToDb();
//     const posts = await Post.find({ content: { $regex: search, $options: "i" } });
//     return posts;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch posts!");
//   }
// };
export const getPost = async (slug) => {    
  try {
    connectToDb();
    const post = await Post.findOne({slug});
    return post;
  } catch (error) {
    throw new Error(error);
  }
}
export const getUser = async (id) => {
    try {
        connectToDb();
        const user = await User.findById({id});
        return user;
    } catch (error) {
        throw new Error(error);
    }
}
export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        throw new Error(error);
    }
}