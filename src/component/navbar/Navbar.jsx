import Link from "next/link"; 
import Links from "./Links/Link";
import styles from "./navbar.module.css";
import {auth} from "@/lib/auth";
import Image from "next/image";

const navbar = async() => {

    const session =await auth();
    return (
        <div className={styles.container}>
            <div className={styles.logoC}>
            <Image src="/LOGO.png" alt="" width={60} height={60}/>
             <Link href="/" className={styles.logo}>ByteBrilliance</Link>
            </div>
            
             <div>
             <Links session={session}/>
             </div>
        </div>
        
        
    );
}
export default navbar;