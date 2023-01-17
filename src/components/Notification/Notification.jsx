import propTypes from "prop-types";
import { Message } from "./Notification.styled";

const Notification = ({ message }) => {
	return <Message>{message}</Message>;
};

Notification.propTypes = {
	message: propTypes.string,
};

export default Notification;