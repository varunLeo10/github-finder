import { useEffect, useContext } from "react";
import GithubContext from "../../../../context/github/GithubContext";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./NotFound.css";
function NotFound() {
  const { setUserEmpty } = useContext(GithubContext);
  useEffect(() => {
    document.querySelector(".button").addEventListener("click", function (e) {
      setUserEmpty();
    });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app__notfound">
      <div>
        <h1>Oops!</h1>
        <p>404 - Page Not Found! </p>
        <Link to="/" className="button">
          <FaHome
            style={{
              display: "inline-block",
              marginRight: "1.2rem",
              fontSize: "1.4rem",
            }}
          />{" "}
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
