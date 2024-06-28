import { auth,signIn } from "@/lib/auth";
import { handleGithubLogin ,handleGoogleLogin} from "@/lib/action";
import style from "./login.module.css";
import LoginForm from "@/component/loginForm/loginForm";



const LoginPage = async() => {
  
  
  
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
      <form action={handleGithubLogin}>
        <button className={style.github}>SIGN-IN WITH GITHUB</button>
      </form>
      <form action={handleGoogleLogin}>
        <button className={style.github}>SIGN-IN WITH GOOGLE</button>
      </form>
       <LoginForm/>
      </div>
      
    </div>
  );
}
export default LoginPage;
