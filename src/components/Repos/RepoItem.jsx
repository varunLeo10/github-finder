import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";
import PropTypes from "prop-types";
function RepoItem({ repo }) {
  const { html_url, forks, open_issues, watchers_count, stargazers_count } =
    repo;
  return (
    <div className="repo_item">
      <div className="repo_link">
        <a href={html_url}>
          <FaLink style={{ display: "inline", marginRight: "0.5rem" }} />
          {repo.name}
        </a>
        <div className="repo_stats">
          <div>
            <FaEye style={{ marginRight: "0.5rem", display: "inline" }} />
            {watchers_count}
          </div>
          <div className="repo_stats">
            <FaStar style={{ marginRight: "0.5rem", display: "inline" }} />
            {stargazers_count}
          </div>
          <div className="repo_stats">
            <FaInfo style={{ marginRight: "0.5rem", display: "inline" }} />
            {open_issues}
          </div>
          <div className="repo_stats">
            <FaUtensils style={{ marginRight: "0.5rem", display: "inline" }} />
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};
export default RepoItem;
