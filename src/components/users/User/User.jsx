import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../../context/github/GithubContext";
import UserDet from "./UserDet";
import RepoList from "../../Repos/RepoList";
import GithubStats from "./GithubStats";
import { useParams } from "react-router-dom";
import "./User.css";
import Spinner from "../../layout/Assets/Spinner";

function User() {
  const goBack = (e) =>
    e.target.textContent === "Go Back to Search" && setUserEmpty();
  const { loading, user, getUser, setUserEmpty, getUserRepos } =
    useContext(GithubContext);
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
    getUserRepos(params.login);
    document.querySelector("main").addEventListener("click", goBack);
    return () =>
      document.querySelector("main").removeEventListener("click", goBack);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Link to="/">Go Back to Search</Link>
        <div className="user__profile">
          <div>
            <div className="user__img">
              <img src={avatar_url} alt="userimg" />
              <div className="login__name">
                <h2>{name}</h2>
                <p>{login}</p>
              </div>
            </div>
            <div className="user__details">
              <div className="user__details-heading">
                <p>{name}</p>
                <button>{type}</button>
                {hireable && (
                  <button
                    style={{
                      color: "rgb(4, 196, 255)",
                      backgroundColor: "rgba(6, 106, 255, 0.151)",
                      border: "1px solid rgba(6, 106, 255, 0.151) ",
                    }}
                  >
                    Hireable
                  </button>
                )}
              </div>
              {bio && <p>{bio}</p>}
              <a
                className="github_profile_link_btn"
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Github Profile
              </a>
              <div
                className="user_profile"
                style={{
                  display:
                    location || blog || twitter_username ? "flex" : "none",
                }}
              >
                {location && (
                  <UserDet title="Location" value={location} border={0} />
                )}
                {blog && (
                  <UserDet
                    title="Website"
                    value={blog}
                    link={`https://${blog}`}
                  />
                )}
                {twitter_username && (
                  <UserDet
                    title="Twitter"
                    value={`@${twitter_username}`}
                    link={`https://twitter.com/${twitter_username}`}
                  />
                )}
              </div>
            </div>
            <div className="reach">
              <GithubStats
                name="followers"
                title="Followers"
                value={followers}
              />
              <GithubStats
                name="following"
                title="Following"
                value={following}
              />
              <GithubStats
                name="repos"
                title="Public Repos"
                value={public_repos}
              />
              <GithubStats
                name="gists"
                title="Public Gists"
                value={public_gists}
              />
            </div>
            <RepoList />
          </div>
        </div>
      </>
    );
  }
}

export default User;
