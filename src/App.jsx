import React from "react";
import "./app.css";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendsList from "./FriendsList/FriendsList";
import TransactionHistory from "./TransactionsHistory/TransactionsHistory";
import userData from "./Profile/user.json";
import statisticsDataSource from "./Statistics/data.json";
import friendsDataSource from "./FriendsList/friends.json";
import transactionDataSource from "./TransactionsHistory/transactions.json";

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
      <Statistics
        statisticsData={statisticsDataSource}
        statisticsTitle={"Upload Stats"}
      />
      <FriendsList friendsData={friendsDataSource} />
      <TransactionHistory transactionData={transactionDataSource} />
    </>
  );
}
