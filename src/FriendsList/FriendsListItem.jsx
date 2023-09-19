import React from "react";
import PropTypes from "prop-types";
import css from "./friendsList.module.css";

const getOnlineColor = (isOnline) => {
  const red = "#FF0000";
  const green = "#00FF00";

  return isOnline ? green : red;
};

const FriendsListItem = ({ friend }) => {
  return (
    <li className={css.friends__list__item} key={friend.id}>
      <span
        style={{ backgroundColor: getOnlineColor(friend.isOnline) }}
        className={css.friends__list__itemIsOnline}
      >
        {friend.isOnline}
      </span>
      <img
        className={css.friends__list__itemAvatar}
        src={friend.avatar}
        alt={`${friend.name}'s avatar`}
      ></img>
      <span className={css.friends__list__itemName}>{friend.name}</span>
    </li>
  );
};

FriendsListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendsListItem;
