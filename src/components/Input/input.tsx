import { InputHTMLAttributes } from "react";
import styles from "./input.module.css";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  info?: string;
}

const Input = ({ label, placeholder, info, ...rest }: IInput) => {
  return (
    <div className={styles.box}>
      <label>{label}</label>
      <input type="number" placeholder={placeholder} {...rest} />
      <p>{info}</p>
    </div>
  );
};

export default Input;
