import Header from './Header.jsx';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {

		};
	}


	render() {
		return (
			<div>
				<Header />
				<Ratings />
				<Reviews />
			</div>
		)
	}
}

export default App;