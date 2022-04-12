import { useState, useContext, useCallback, useEffect } from "react";
import _debounce from "lodash/debounce";
import GithubContext from "../../../context/github/GithubContext";
import AlertContext from "../../../context/alert/AlertContext";
import Clear from "./Clear";
import "./UserSearch.css";

function UserSearch() {
  const { fetchUsers, loading, users, bool, setUserEmpty } =
    useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");
  const [empty, setEmpty] = useState(false);
  useEffect(() => {
    document
      .querySelector(".github_link")
      .addEventListener("click", () => setText(""));
    document
      .querySelector(".links")
      .addEventListener("click", () => setText(""));
    return () => {
      document
        .querySelector(".github_link")
        .removeEventListener("click", () => setText(""));
      document
        .querySelector(".links")
        .removeEventListener("click", () => setText(""));
    };
  }, []);
  //eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceFn = useCallback(_debounce(fetchUsers, 2000), []);
  if (empty) {
    debounceFn.cancel();
  }

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.target.value === "") {
      setText("");
      setEmpty(true);
      setUserEmpty();
    } else {
      setEmpty(false);
      debounceFn(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      fetchUsers(text);
      setText("");
      setEmpty(true);
    }
  };
  bool.current = false;
  if (
    (users.length > 1 && text === "") ||
    (users.length === 0 && text !== "") ||
    (users.length > 1 && text !== "") ||
    users.length === undefined
  ) {
    bool.current = true;
  }
  if (!loading) {
    return (
      <div className={"searchbox " + (users.length > 1 ? "align" : "")}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Users"
            className="search"
            value={text}
            onChange={handleChange}
          />
          <button type="submit" className="search-btn">
            Search
          </button>
          <Clear value={{ bool, text, setText }} />
        </form>
      </div>
    );
  } else {
    return null;
  }
}

export default UserSearch;
