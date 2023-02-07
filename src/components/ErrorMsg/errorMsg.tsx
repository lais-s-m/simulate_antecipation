import styles from "./ErrorMsg.module.css";
import { IChildren } from "@/src/interfaces/interfaces";

const ErrorMsg = ({ children }: IChildren) => (
  <span className={styles.errorMsg}>{children}</span>
);

export default ErrorMsg;
