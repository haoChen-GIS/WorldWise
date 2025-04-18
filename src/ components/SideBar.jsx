import styles from "./SideBar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo></Logo>
      <AppNav />
      <p>List of cities</p>
      <Footer />
    </div>
  );
}

export default SideBar;
