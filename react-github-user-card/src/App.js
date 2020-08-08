import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/corgipower')
      .then(res => {
        this.setState({user: res.data})
        console.log(this.state.user);
      })
      .catch(err => console.log('user', err));

    axios
      .get('https://api.github.com/users/corgipower/followers')
      .then(res => {
        this.setState({followers: res.data})
        console.log(this.state.followers)
      })
      .catch(err => console.log('followers', err));
  }

  componentDidUpdate() {
  }

  render(){
    return(
      <div>
        <p>{this.state.user.login}</p>
        <Card user={this.state.user} followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
