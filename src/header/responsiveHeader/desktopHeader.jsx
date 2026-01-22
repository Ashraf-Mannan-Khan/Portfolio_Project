import styles from "../headerCss/desktop.module.css";
import "../../css/font.css";
import { NavLink, Outlet, Link } from "react-router-dom";

export function DesktopHeader() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <NavLink to="/" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <NavLink to="/about" className={styles.navLink}>
              About
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <a href="#desktopWork" className={styles.anchorLink}>
              Work
            </a>
          </li>
          <li className={styles.list_item}>
            <a href="#contact" className={styles.navLink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
