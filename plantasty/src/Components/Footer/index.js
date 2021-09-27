import React from "react";
import { Link } from "react-router-dom";

import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>© 2010 — 2020</li>
        <li>
          <Link
            to={{
              pathname:
                "https://github.com/SchoolOfCode/w15_collaborative-react-project-team-f-plantasty",
            }}
          >
            Github Team
          </Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
