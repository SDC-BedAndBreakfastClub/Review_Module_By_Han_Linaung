import React from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Ratings from './Ratings';
import Reviews from './Reviews';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingId: 17,
      reviews: [],
      rating: {},
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
        this.getOverallRating(data);
      },
      error: (error) => {
        console.error('error fetching data from db', error);
      },
    });
  }

  getOverallRating(reviews) {
    let rating = {};
    rating = reviews.reduce((acc, review) => {
      acc.accuracy += review.accuracy;
      acc.communication += review.communication;
      acc.cleanliness += review.cleanliness;
      acc.location += review.location;
      acc.check_in += review.check_in;
      acc.value += review.value;
      return acc;
    }, {
      accuracy: 0,
      communication: 0,
      cleanliness: 0,
      location: 0,
      check_in: 0,
      value: 0,
    });

    Object.keys(rating).forEach((category) => {
      Math.round(rating[category] /= reviews.length);
    });

    this.setState({
      reviews, rating,
    });
  }

  render() {
    const { reviews } = this.state;
    const { rating } = this.state;
    return (
      <div>
        <Header numReviews={reviews.length} />
        <hr />
        <Ratings rating={rating} />
        <Reviews className="container" reviewsData={reviews} />
      </div>
    );
  }
}

export default App;
