import { createContext, useReducer, useRef } from "react";
import githubReducer from "./GithubReducer";
const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
export const GithubProvider = ({ children }) => {
  const bool = useRef(false);
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const fetchUsers = async (user) => {
    setLoading();
    const params = new URLSearchParams({ q: user });
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: data.items.length === 1 ? data.items[0] : data.items,
    });
  };
  const getUser = async (login) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };
  const getUserRepos = async (username) => {
    const params = new URLSearchParams({ sort: "created", per_page: 10 });
    const response = await fetch(
      `${GITHUB_URL}/users/${username}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };
  const setLoading = () => dispatch({ type: "SET_LOADING" });
  const setUserEmpty = () => dispatch({ type: "SET_USER_EMPTY" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        getUserRepos,
        fetchUsers,
        getUser,
        setUserEmpty,
        bool,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubContext;
