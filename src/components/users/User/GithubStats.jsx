import { FaCodepen, FaStore, FaUsers } from "react-icons/fa";
import PropTypes from "prop-types";
function GithubStats({ name, title, value }) {
  return (
    <div
      className="github_stats"
      style={{ borderLeft: name !== "followers" && "1px solid white" }}
    >
      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
      {(name === "following" || name === "followers") && (
        <FaUsers color="rgb(240,0,184)" />
      )}
      {name === "repos" && <FaCodepen color="rgb(240,0,184)" />}
      {name === "gists" && <FaStore color="rgb(240,0,184)" />}
    </div>
  );
}
GithubStats.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

GithubStats.defaultProps = {
  value: 0,
};
export default GithubStats;
