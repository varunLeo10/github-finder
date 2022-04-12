import GithubContext from "../../../context/github/GithubContext";
import { useContext } from "react";
function Clear({ value: { bool, text, setText } }) {
  const { setUserEmpty } = useContext(GithubContext);
  const handleClick = () => {
    if (text !== "") {
      setText("");
    } else {
      setUserEmpty();
    }
  };
  if (bool.current) {
    return (
      <button type="button" className="clear-btn" onClick={handleClick}>
        CLEAR
      </button>
    );
  } else {
    return null;
  }
}

export default Clear;
