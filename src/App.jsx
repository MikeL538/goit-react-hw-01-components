import React from "react";
import "./css/main.css";
import Profile from "./Profile";
import Statistics from "./Statistics";
import userData from "./user.json";
import statisticsDataSource from "./data.json";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics statisticsData={statisticsDataSource} />
    </>
  );
}
