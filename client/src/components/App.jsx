import React from "react";
import $ from "jquery";
import Header from "./Header.jsx";
import Ratings from "./Ratings.jsx";
import Reviews from "./Reviews.jsx";
import PostReviews from "./PostReviews.jsx";
import { title, body } from "./AppCSS.jsx";

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
      currid: 1,
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
    let url = `api/rooms/${this.state.currid}/reviews`;
    let options = {
      methoed: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        let obj = Object.assign({}, this.state);
        obj.reviews = data.reviews;
        this.setState(obj);
      })
      .catch(err => console.error(err));
  }

  deteleReview(id, roomid) {
    let url = `api/rooms/${this.state.currid}/reviews`;
    let options = {
      method: "DELETE",
      body: JSON.stringify({ id, roomid }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch(url, options)
      .then(res => res.json())
      .then(data => {
        let obj = Object.assign({}, this.state);
        obj.reviews = data;
        this.setState(obj);
      })
      .catch(err => console.error(err));
  }

  sendReviews(data) {
    let array = this.state.reviews.filter(
      e => e.author.toLowerCase() === data.author.toLowerCase()
    );
    let url = `api/rooms/${this.state.currid}/reviews`;
    if (array.length) {
      data.image = array[0].image;
      data.flagged = array[0].flagged;
      let options = {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      };
      fetch(url, options)
        .then(res => res.json())
        .then(data => {
          let obj = Object.assign({}, this.state);
          obj = Object.assign(obj, data.ratings);
          this.setState(obj);
        })
        .catch(err => console.error(err));
    } else {
      let options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      };
      fetch(url, options)
        .then(res => res.json())
        .then(data => {
          let obj = Object.assign({}, this.state);
          obj = Object.assign(obj, data.ratings);
          this.setState(obj);
        })
        .catch(err => console.error(err));
    }
  }

  getRatingBreakdown(data) {
    data.aggregateRating = Math.ceil(
      (data.cleanliness +
        data.value +
        data.accuracy +
        data.check_in +
        data.location +
        data.communication) /
        6
    );
    this.setState(data);
  }

  render() {
    return (
      <div className="container title">
        <Header
          className="container"
          numReviews={this.state.reviews.length}
          aggregateRating={this.state.aggregateRating}
        />
        <hr />
        <Ratings className="row" key={this.state.name} rating={this.state} />
        <Reviews
          className="row"
          reviewsData={this.state.reviews}
          deletefunc={this.deteleReview.bind(this)}
        />
        <PostReviews sendReview={this.sendReviews.bind(this)} />
      </div>
    );
  }
}

export default App;
