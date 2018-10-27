import Header from './Header.jsx';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			reviews: []
		};
	}

	getReviews() {
		$.ajax({
			url: '/',
			type: 'GET', 
			contentType: 'application/json',
			success: (data) => {
				console.log('data is: ', data);
				this.setState({
					reviews: data
				})
			}, 
			error: function() {
				console.log('fail');
			}
		})
	};


	render() {
		return (
			<div>
				<h1>hi from react</h1>
				<Header />
				<Ratings />
				<Reviews reviewsData={this.getReviews()}/>
			</div>
		)
	}
}

export default App;