import PropTypes from 'prop-types';
const { Message } = require('./Notification.styled');

const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
