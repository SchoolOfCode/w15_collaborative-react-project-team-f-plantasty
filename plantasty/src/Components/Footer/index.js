import React from "react";
import { Link } from "react-router-dom";

import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          {/* col1 */}
          <div className="col">
            <h4>Plantasty</h4>
            <ul className="list-unstyled">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          {/* col2  */}
          <div className="col">
            <h4>Blank</h4>
            <ul className="list-unstyled">
              <li>A</li>
              <li>B</li>
              <li>C</li>
            </ul>
          </div>
          {/* col3 */}
        </div>
      </div>
      {/* <ul>
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
      </ul> */}
    </footer>
  );
}

export default Footer;
