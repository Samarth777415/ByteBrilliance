"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import style from "./home.module.css";


const Home = () => {
  const router = useRouter();

  const handleButtonClick = (route) => {
    router.push(route);
  };
    

  return (
    <div className={style.container}>
      <div className={style.textConainer}>
        <h2 className={style.title}>Byte Brilliance:-</h2>
        {/* <h3 className={style.title1}>Illuminating the World of Technology</h3>
         <h4 className={style.title}>Your Source for the Latest Tech News, Reviews, and Insights</h4> */}

        <p className={style.desc}>
        Welcome to Byte Brilliance, where we shine a light on the ever-evolving landscape of technology. 
        Dive into a world of cutting-edge innovations, in-depth reviews, and expert insights designed to keep you 
        informed and ahead of the curve. 
        </p>
        <div className={style.buttons}>
          <button className={style.button} onClick={() => handleButtonClick('/contact')}>
            Contact..
          </button>
          <button className={style.button} onClick={() => handleButtonClick('/about')}>
            Learn More..
          </button>
        </div>
        <div className={style.brands}>
          <Image src="/brands.png" alt="" fill className={style.brandImg} />
        </div>
      </div>
      <div className={style.imgContainer}>
        <Image src="/com.png" alt="" height={400} width={305} className={style.heroImg} />
      </div>
    </div>
  );
};

export default Home;