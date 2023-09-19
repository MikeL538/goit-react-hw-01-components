import React from "react";
import PropTypes from "prop-types";
import css from "./profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.description__avatar}
        />
        <p className={css.description__name}>{username}</p>
        <p className={css.description__tag}>@{tag}</p>
        <p className={css.description__location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.stats__label}>Followers </span>
          <span className={css.stats__quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.stats__label}>Views </span>
          <span className={css.stats__quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.stats__label}>Likes </span>
          <span className={css.stats__quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
