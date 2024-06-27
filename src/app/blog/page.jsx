
import { get } from "mongoose";
import style from "./blog.module.css";
import PostCard from '@/component/blogcard/blogcard'
import { getPosts } from "@/lib/data";


const BlogPage = async() => {
  const posts = await getPosts();
  return (
    <div className={style.container}>
      {posts.map((post) => (
      <div className={style.post} key={posts.id}>
      <PostCard  post={post}/>
      </div>
  
      ))}
    </div>
  );
}
export default BlogPage;