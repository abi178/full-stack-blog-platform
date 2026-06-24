import { useEffect, useState } from "react";
import api from "../services/api";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const response = await api.get(
        "/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Profile</h1>

      <p>
        <strong>Username:</strong>{" "}
        {user.username}
      </p>

      <p>
        <strong>Email:</strong>{" "}
        {user.email}
      </p>

      <p>
        <strong>Member Since:</strong>{" "}
        {new Date(
          user.createdAt
        ).toLocaleDateString()}
      </p>
    </div>
  );
}

export default Profile;