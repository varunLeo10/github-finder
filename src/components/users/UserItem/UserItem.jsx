import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./UserItem.css";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="cards">
      <div className="image">
        <img src={avatar_url} alt="profile_image" />
      </div>
      <div className="profile_name_link">
        <p>{login}</p>
        <Link to={`/user/${login}`}>View Profile</Link>
      </div>
    </div>
  );
}
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
