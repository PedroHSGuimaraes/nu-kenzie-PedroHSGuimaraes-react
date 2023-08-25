import styles from "./style.module.scss";

export const Input = ({ label, id, placeholder, type, value, setValue }) => {
  return (
    <div className={styles.inputBox}>
      <label className={"headline"} htmlFor={id}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
};
