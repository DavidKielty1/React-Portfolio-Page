import "./topbar.scss";

import { Email, Person } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <div className="item-container">
            <Person className="icon" />
            <span>+44 7929517529</span>
          </div>
          <div className="item-container">
            <Email className="icon" />
            <span>uKnoIt@FakeMail.Com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line 1"></span>
            <span className="line 2"></span>
            <span className="line 3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
