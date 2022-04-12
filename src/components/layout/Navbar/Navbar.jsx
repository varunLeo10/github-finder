import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";
import { useContext, useEffect } from "react";
import GithubContext from "../../../context/github/GithubContext";
function Navbar({ title }) {
  const { setUserEmpty } = useContext(GithubContext);
  useEffect(() => {
    document
      .querySelector(".github_link")
      .addEventListener("click", setUserEmpty);
    document.querySelector(".links").addEventListener("click", setUserEmpty);
    return () => {
      document
        .querySelector(".github_link")
        .removeEventListener("click", setUserEmpty);
      document
        .querySelector(".links")
        .removeEventListener("click", setUserEmpty);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className="navigation">
      <div className="github_link">
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <FaGithub className="github_icon" /> <span>{title}</span>
        </Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
Navbar.defaultProps = {
  title: "Github Finder",
};
Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
