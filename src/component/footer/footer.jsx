import style from "./footer.module.css";


const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>Byte Brilliance</div>
      <div className={style.text}>
      Your Source for the Latest Tech News, Reviews, and Insights    </div>
    </div>
  )
}   
export default Footer;