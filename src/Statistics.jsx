import React from "react";
import PropTypes from "prop-types";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const Statistics = ({ statisticsData }) => {
  return (
    <div className="statistics">
      <h2 className="statistics__title">Upload stats</h2>

      <ul className="statistics__stat-list">
        {statisticsData.map((statistic) => (
          <li
            className="statistics__item"
            key={statistic.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="statistics__label">{statistic.label} </span>
            <span className="statistics__percentage">
              {statistic.percentage}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  statisticsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
