import React from 'react';
import $ from 'jquery';
import classNames from 'classnames';
import styles from './App.css';
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
      aggregateRating: null,
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
        this.getRatingBreakdown(data);
      },
      error: (error) => {
        console.error('error fetching data from db', error);
      },
    });
  }

  getRatingBreakdown(reviews) {
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
      rating[category] /= reviews.length;
    });

    const aggregateRating = Object.keys(rating).reduce((acc, category) => {
      let total = acc;
      total += rating[category];
      return total;
    }, 0) / reviews.length;

    this.setState({
      reviews, rating, aggregateRating,
    });
  }

  render() {
    const { reviews, rating, aggregateRating } = this.state;
    return (
      <div className={classNames({ [styles.body]: true, container: true })}>
        <Header className="container" numReviews={reviews.length} aggregateRating={aggregateRating} />
        <hr />
        <Ratings className="row" rating={rating} />
        <Reviews className="row" reviewsData={reviews} />
      </div>
    );
  }
}

export default App;
