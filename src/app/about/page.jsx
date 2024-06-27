import Image from "next/image";
import style from "./about.module.css";
import Slider from '@/component/Slider/slideer'
const Aboutpage = () => {
  return (
    <div><div className={style.container}>
    <div className={style.textContainer}>
      <h3 className={style.subtitle}>About Us</h3>
      <h2 className={style.title}>Your Source for the Latest Tech News and Insights</h2>
      <p className={style.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus in
        sint nobis nam quaerat non, ipsa aspernatur nulla maxime recusandae,
        perspiciatis praesentium, corrupti sit dolorum quisquam qui sed ut hic.
      </p>
      <div className={style.boxes}>
          <div className={style.box}>
            <h2>1+</h2>
            <p>Year of Experience</p>
          </div>
          <div className={style.box}>
            <h2>1+</h2>
            <p>Project</p>
          </div>
      </div>
    </div>
    <div className={style.imgContainer}>
      <Image  className={style.img} src="/about.png" alt="" height={400} width={400} />
    </div>
  </div>
  <div className={style.sliderContainer}>
    <br />
    <Slider/>
  </div></div>
      
      
      

  );
}

export default Aboutpage;   
