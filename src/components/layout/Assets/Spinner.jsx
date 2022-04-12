import { useContext } from "react";
import GithubContext from "../../../context/github/GithubContext";
import spinner from "./spinner.gif";
import "./Spinner.css";

function Spinner() {
  const { loading } = useContext(GithubContext);
  if (loading) {
    return (
      <div className="flex-center">
        <div className="spinner">
          <img src={spinner} alt="spinner" />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Spinner;
