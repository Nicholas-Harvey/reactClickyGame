import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    highScore: 1
  };

shuffleCard = () => {
  var copy = [...friends], m = friends.length, t, i;
  while (m) {
    i = Math.floor(Math.random()* m--);
    t = copy[m];
    copy[m] = copy[i];
    copy[i] = t;
  }
  this.setState({
    friends: copy
  })
}

clickHandler = (id) =>{
  var newScore = this.state.score ++;
  var clickedCardIndex = this.state.friends.findIndex(friend => {
  return (friend.id === id);
  var clickedCard = this.state.friends[clickedCardIndex];
  if (clickedCard.clicked){
    this.setState({score: 0})
newScore()
  }
  })
  }
  render() {
    return (
      <Wrapper>
        <Title>States</Title>
        {this.state.friends.map(friend => (
          <FriendCard
          shuffleCard={this.shuffleCard}
          clickedCard={this.clickedCard}
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;