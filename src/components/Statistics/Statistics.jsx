import { FeedbackList, ListItem } from './Statistics.styled';

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

export default Statistics;
