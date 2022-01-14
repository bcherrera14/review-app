import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import FeedbackData from './data/FeedbackData';
import About from './pages/About';
import AboutIconLink from './Components/AboutIconLink';

function App() {
	const [ feedback, setFeedback ] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([ newFeedback, ...feedback ]);
	};

	return (
		<Router>
			<Header />
			<div className="container">
				<Routes>
					<Route
						path="/"
						element={
							<div>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
							</div>
						}
					/>
					<Route path="/about" element={<About />} />
				</Routes>
				<AboutIconLink />
			</div>
		</Router>
	);
}

export default App;
