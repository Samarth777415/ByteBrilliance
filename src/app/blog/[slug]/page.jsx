
const e = require("express");
import Image from "next/image";
import style from "./blogpage.module.css";
import { getPost } from "@/lib/data";



const blogpage1 = async({params}) => {
  
  const {slug} = params;
  const post=await getPost(slug);
 
  return (
    
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image className={style.img} src={post?.img} alt="" fill />
      </div>
      <div className={style.textContainer}>
         <h1 className={style.title}>{post?.title}</h1>
         <div className={style.detail}>
          <Image className={style.avatar} src="/contact.png" alt="" width={50} height={50} />
         </div>
         <div className={style.detailText}>
          <span className={style.detailTitle}>Author</span>
          <span className={style.detailValue}> Samarth Gite</span>
         </div>
         <div className={style.detailText}>
          <span className={style.detailTitle}>Published</span>
          <span className={style.detailValue}>{post.createdAt?.toString().slice(4, 16)}</span>
         </div>
         <div className={style.content}>
            {post?.desc}
          </div>
      </div>
    </div>
  );
}
export default blogpage1;