import React from "react";
import "./css/main.css";
import Profile from "./Profile";
import userData from "./user.json";

export default function App() {
  return (
    <Profile
      username={userData.username}
      tag={userData.tag}
      location={userData.location}
      avatar={userData.avatar}
      stats={userData.stats}
    />
  );
}
