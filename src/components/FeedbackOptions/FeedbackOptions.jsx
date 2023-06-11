import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const feedbacks = Object.entries(options);

  return (
    <div className={css.feedbackOptions}>
      <h2 className={css.header}>Please leave feedback</h2>

      <ul className={css.list}>
        {feedbacks.map(feedback => {
          const key = feedback[0];

          return (
            <li key={key} className={css.item}>
              <button
                type="button"
                className={css.buttonFeedback}
                onClick={() => onLeaveFeedback(key)}
              >
                {key}
              </button>
              <span>{feedback[1]}</span>
            </li>
          );
        })}
        <li key={options[0]} className={css.item}></li>
      </ul>
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
