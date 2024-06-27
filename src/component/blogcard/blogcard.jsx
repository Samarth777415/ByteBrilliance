
import Image from "next/image"
import styles from "./blogcard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
   return (
      <div className={styles.container}>
         <div className={styles.top}>
            <div className={styles.imgContainer}>
               <Image  className={styles.imp} src={post?.img} alt="" width={300} height={400} />
            </div>
            <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
         </div>
         <div className={styles.bottom}>
            <h1 className={styles.title}>{post?.title}</h1>
            <p className={styles.desc}>{post?.desc.slice(0,100)}</p>
         <Link  className={styles.link} href={`/blog/${post.slug}`}>READ MORE...</Link>
         </div>
      </div>
   )
}


export default PostCard
