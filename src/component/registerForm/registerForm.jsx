
"use client";

import { register } from "@/lib/action";
import styles from "./register.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="E-mail" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Already a User? <b>LOGIN</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
