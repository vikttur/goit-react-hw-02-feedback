// import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ good, neutral, bad }) {
  return (
    <div>
      <h2 className={css.header}>Please leave feedback</h2>

      <ul className={css.list}>
        {userStatistics.map(stat => {
          return (
            <li key={stat[0]} className={css.item}>
              <span className={css.label}>{stat[0]}</span>
              <span className={css.quantity}>{stat[1]}</span>
            </li>
          );
        })}
        <li key={stat[0]} className={css.item}></li>
      </ul>
    </div>
  );
}

// Statistics.propTypes = {
//   stats: PropTypes.object.isRequired,
// };
