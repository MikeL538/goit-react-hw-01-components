import React from "react";
import PropTypes from "prop-types";
import css from "./statistics.module.css";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
};

const Statistics = ({ statisticsData, statisticsTitle }) => {
  return (
    <div className={css.statistics}>
      {statisticsTitle && (
        <h2 className={css.statistics__title}>{statisticsTitle}</h2>
      )}
      {/* <h2 className="statistics__title">Upload stats</h2> */}

      <ul className={css.statistics__statList}>
        {statisticsData.map((statistic) => (
          <li
            className={css.statistics__item}
            key={statistic.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={css.statistics__label}>{statistic.label} </span>
            <span className={css.statistics__percentage}>
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
  statisticsTitle: PropTypes.string,
};

export default Statistics;
