import React from 'react';
import $ from 'jquery';
import Header from './Header';
import Ratings from './Ratings';
import Reviews from './Reviews';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingId: 3,
      reviews: [],
    };
  }

  componentDidMount() {
    const { listingId } = this.state;
    this.getReviews(listingId);
  }

  getReviews(listingId) {
    $.ajax({
      url: `/api/rooms/${listingId}/reviews`,
      type: 'GET',
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          reviews: data,
        });
      },
      error: (error) => {
        console.error('error fetching data from db', error);
      },
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <h1>{reviews.length} Reviews</h1>
        <Header />
        <Ratings />
        <Reviews reviewsData={reviews} />
      </div>
    );
  }
}

export default App;
