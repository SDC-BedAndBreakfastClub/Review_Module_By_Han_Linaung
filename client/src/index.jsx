import App from './components/App.jsx';
import reviews from './data/reviewsData.js';

ReactDOM.render(<App reviews={reviews} />, document.getElementById('app'));
