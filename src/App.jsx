import React from "react";
import "./css/main.css";
import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendsList from "./FriendsList";
import TransactionHistory from "./TransactionHistory";
import userData from "./Data/user.json";
import statisticsDataSource from "./Data/data.json";
import friendsDataSource from "./Data/friends.json";
import transactionDataSource from "./Data/transactions.json";

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
      <FriendsList friendsData={friendsDataSource} />
      <TransactionHistory transactionData={transactionDataSource} />
    </>
  );
}
