
import Image from "next/image";
import styles from "./contact.module.css";
import { addMessage } from "@/lib/action";


const ContactPage = () => { 
    return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        
        <form action={addMessage} className={styles.form}>
          <input type="text" placeholder="Full Name" name="name"/>
          <input type="text" placeholder="Email Address" name="email"/>
          <input type="text" placeholder="Phone Number (Optional)" name="phone"/>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
    );
    }   
    export default ContactPage;
