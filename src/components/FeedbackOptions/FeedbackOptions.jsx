import propTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ feedbacks, handleClick }) => {
	return (
		<>
			{feedbacks.map((feedback) => (
				<Button
					type="button"
					onClick={handleClick}
					name={feedback}
					key={feedback}
				>
					{feedback}
				</Button>
			))}
		</>
	);
};

FeedbackOptions.propTypes = {
	feedbacks: propTypes.arrayOf(propTypes.string).isRequired,
	handleClick: propTypes.func.isRequired,
};

export default FeedbackOptions;