import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItem({ item, handleDelete }) {
	return (
		<Card className="card">
			<div className="num-display">{item.rating}</div>
			<button onClick={() => handleDelete(item.id)} className="close">
				<FaTimes color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	item: PropTypes.object
};

export default FeedbackItem;