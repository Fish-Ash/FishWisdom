import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./PageTemplate.module.css";

function PageTemplate({ children, title }) {
  const location = useLocation();
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);
  const isHome = location.pathname === "/" || location.pathname === "/home";
  const isNav = location.pathname === "/navigation";

  return (
    <div>
      <div className={styles.header} id="PageHead">
        不惑
      </div>
      <ul className={styles.navibar}>
        <li>
          <Link to="/" className={isHome ? styles.active : ""}>
            主页
          </Link>
        </li>
        <li>
          <Link to="/navigation" className={isNav ? styles.active : ""}>
            导航
          </Link>
        </li>
      </ul>

      <div className={styles.menuButtons}>
        <button type="button" className={styles.menuButton} aria-label="菜单">
          <img src="/svg/menu.svg" width="50" height="50" alt="" />
        </button>
        <a href="#PageHead">
          <button type="button" className={styles.subButton} aria-label="向上">
            <img src="/svg/up.svg" width="30" alt="" />
          </button>
        </a>
        <a href="#PageEnd">
          <button type="button" className={styles.subButton} aria-label="向下">
            <img src="/svg/down.svg" width="30" alt="" />
          </button>
        </a>
      </div>

      <main className={styles.main}>
        {children}
      </main>

      <div id="PageEnd" />
    </div>
  );
}

export default PageTemplate;
