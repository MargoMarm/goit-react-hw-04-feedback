import { ButtonList, ListItem, ButtonOption } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  return (
    <ButtonList>
      {options.map(option => (
        <ListItem key={option}>
          {' '}
          <ButtonOption type="button" onClick={() => onLeaveFeedback(option)}>
            {capitalizeFirstLetter(option)}
          </ButtonOption>
        </ListItem>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;
