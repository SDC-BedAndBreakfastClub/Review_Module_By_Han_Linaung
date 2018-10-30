import React from 'react';
import $ from 'jquery';
import Header from './Header';
import Ratings from './Ratings';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingId: null,
      reviews: [],
    };
  }

  componentDidMount() {
    const { listingId } = this.state;
    this.getReviews(listingId);
  }

  getReviews(listingId) {
    $.ajax({
      url: '/api/rooms/:listingId/reviews',
      type: 'GET',
      contentType: 'application/json',
      data: {
        listingId,
      },
      success: (data) => {
        this.setState({
          reviews: data,
        });
      },
      error: (error) => {
        throw error;
      },
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <h1>hi from react</h1>
        <Header />
        <Ratings />
        <Reviews reviewsData={reviews} />
      </div>
    );
  }
}

export default App;
