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
      })
      .catch(err => console.log('user', err));
    axios
      .get('https://api.github.com/users/corgipower/followers')
      .then(res => {
        this.setState({followers: res.data})
      })
      .catch(err => console.log('followers', err));
  }
  render(){
    return(
      <div>
        <Card user={this.state.user} followers={this.state.followers} />
      </div>
    )
  }
}
export default App;