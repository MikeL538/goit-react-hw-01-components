import React from "react";
import PropTypes from "prop-types";
import "./friendsList.css";

const getOnlineColor = (isOnline) => {
  const red = "#FF0000";
  const green = "#00FF00";

  return isOnline ? green : red;
};

const FriendsList = ({ friendsData }) => {
  return (
    <ul className="friends-list">
      {friendsData.map((friend) => (
        <li className="friends-list__item" key={friend.id}>
          <span
            style={{ backgroundColor: getOnlineColor(friend.isOnline) }}
            className="friends-list__item-isOnline"
          >
            {friend.isOnline}
          </span>
          <img
            className="friends-list__item-avatar"
            src={friend.avatar}
            alt={`${friend.name}'s avatar`}
          ></img>
          <span className="friends-list__item-name">{friend.name}</span>
        </li>
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendsList;
