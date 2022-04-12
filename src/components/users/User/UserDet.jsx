import PropTypes from "prop-types";
function UserDet({ title, link, value, border }) {
  return (
    <div
      className="user_profile-det"
      style={{ borderLeft: border === 1 && "1px solid white" }}
    >
      <p>{title}:</p>
      {border === 1 ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      ) : (
        <h2>{value}</h2>
      )}
    </div>
  );
}

UserDet.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
UserDet.defaultProps = {
  link: "",
  border: 1,
};
export default UserDet;
