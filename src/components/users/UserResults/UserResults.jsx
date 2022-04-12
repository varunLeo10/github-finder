import { useContext } from "react";
import "./UserResults.css";
import UserItem from "../UserItem/UserItem";
import GithubContext from "../../../context/github/GithubContext";
import Spinner from "../../layout/Assets/Spinner";

function UserResults() {
  const { users, loading } = useContext(GithubContext);
  if (!loading && users.length !== 0) {
    return (
      <div className="div" style={{ display: users.length > 1 || "flex" }}>
        {users.length > 1 ? (
          users.map((user) => <UserItem key={user.id} user={user} />)
        ) : (
          <UserItem user={users} />
        )}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
