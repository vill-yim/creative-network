import styles from "../../styles/contactus/form.module.css";



export const Form = () => {
  return (
    <div className={styles.formContainer}>
     
      <form className={styles.form}>
        <input type="text" placeholder="FIRST NAME" className={styles.input} />
        <input type="text" placeholder="LAST NAME" className={styles.input} />
        <input
          type="email"
          placeholder="EMAIL ADDRES"
          className={styles.input}
        />
        <input type="tel" placeholder="PHONE NO." className={styles.input} />
        <input
          type="text"
          placeholder="COMPANY NAME"
          className={styles.input}
        />
        <div className={styles.selectContainer}>
          <select className={styles.select}>
            <option value="">SELECT BUDGET</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <textarea
          placeholder="WE'D LOVE TO HEAR MORE ABOUT YOU!"
          className={styles.textarea}
        ></textarea>
      </form>
    </div>
  );
};

