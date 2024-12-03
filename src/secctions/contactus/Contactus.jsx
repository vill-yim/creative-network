import { Form } from "./Form";
import styles from "../../styles/contactus/contactus.module.css";

export const Contactus = () => {
  return (
    <div className={styles["contactus-section"]}>
      <div className={styles["title"]}>GET IN TOUCH!</div>

            <div className={styles["content-form"]}>
                <Form />
            </div>
    </div>
  );
}


