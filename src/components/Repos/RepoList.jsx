import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import RepoItem from "./RepoItem";
import "./RepoList.css";
function RepoList() {
  const { repos } = useContext(GithubContext);
  return (
    <div className="repositories">
      <h2>Latest Repositories</h2>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

export default RepoList;
