import React from "react";
import $ from "jquery";
import classNames from "classnames";
import styles from "./App.css";
import Header from "./Header";
import Ratings from "./Ratings";
import Reviews from "./Reviews";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getReviews = this.getReviews.bind(this);
    this.getRatingBreakdown = this.getRatingBreakdown.bind(this);
    this.state = {
      accuracy: 4,
      check_in: 4,
      cleanliness: 5,
      communication: 1,
      id: 1,
      location: 1,
      name: "Carroll Hegmann",
      reviews: [
        {
          id: 1,
          author: "Blake Forrest",
          image:
            "https://s3.amazonaws.com/uifaces/faces/twitter/chrisvanderkooi/128.jpg",
          date: "November 2018",
          body: "I like this room. It was great!",
          room_id: 1
        }
      ],
      value: 5,
      aggregateRating: 3
    };
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    $.ajax({
      url: `api/rooms/1/reviews`,
      type: "GET",
      contentType: "application/json",
      success: data => {
        this.getRatingBreakdown(data);
      },
      error: error => {
        console.error("error fetching data from db", error);
      }
    });
  }

  getRatingBreakdown(data) {
    data.aggregateRating =
      (data.cleanliness +
        data.value +
        data.accuracy +
        data.check_in +
        data.location +
        data.communication) /
      6;
    this.setState(data);
  }

  render() {
    return (
      <div className={classNames({ [styles.body]: true, container: true })}>
        <Header
          className="container"
          numReviews={this.state.reviews.length}
          aggregateRating={this.state.aggregateRating}
        />
        <hr />
        <Ratings className="row" key={this.state.name} rating={this.state} />
        <Reviews className="row" reviewsData={this.state.reviews} />
      </div>
    );
  }
}

export default App;
