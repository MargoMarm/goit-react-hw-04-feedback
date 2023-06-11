import { FeedbackList, ListItem } from './Statistics.styled';
import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <FeedbackList>
        <ListItem>Good: {good}</ListItem>
        <ListItem>Neutral: {neutral}</ListItem>
        <ListItem>Bad: {bad}</ListItem>
        <ListItem>Total: {total}</ListItem>
        <ListItem>Positive feedback: {positivePercentage}%</ListItem>
      </FeedbackList>
    </>
  );
};
Statistics.propTypes = {
	 good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;
