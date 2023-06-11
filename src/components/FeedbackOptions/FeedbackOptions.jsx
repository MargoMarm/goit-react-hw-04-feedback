import { ButtonList, ListItem, ButtonOption } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
