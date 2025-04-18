import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" className={styles.logo} alt="WorldWise Logo" />
    </Link>
  );
}

export default Logo;
