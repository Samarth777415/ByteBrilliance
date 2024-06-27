import { register } from "@/lib/action";
import style from "./register.module.css";
import RegisterForm from "@/component/registerForm/registerForm";
const RegisterPage = () => {    
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
            <RegisterForm />
            </div>
           
        </div>
    );
}

export default RegisterPage;