import Axios from 'axios';
import React, { Component } from 'react';
import Card from './Card';

class FollowersList extends Component {
    constructor() {
        super();
        this.state = {
            user: corgipower,
            followers: [],
            userData: {},
        }
    }

    componentDidMount() {
        Axios
            .get(`https://api.github.com/users/${this.state.user}`)
            .then(res => {
                this.setState({
                    ...this.state,
                    userData: res.data,
                })
            })
            .catch(err => console.log(err));

        Axios
            .get(`https://api.github.com/users/${this.state.user}/followers`)
            .then(res => {
                this.setState({
                    ...this.state,
                    followers: res.data,
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Card user={this.state.userData} followers={this.state.followers} />
            </div>
        )
    }
}

export default FollowersList;