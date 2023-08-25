import logo from "../../assets/logo.svg";
import styles from "./style.module.scss";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__flexbox}>
          <img src={logo} alt="Nu Kenzie Logo" />
        </div>
      </div>
    </header>
  );
};
