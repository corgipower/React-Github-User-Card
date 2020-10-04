import React, { Component } from 'react';
import './card.css'

class Card extends Component {
    render() {
        const users = [this.props.user, ...this.props.followers]

        return (
            <div>
            {users.map(user => (
                <div key={user.node_id} className="card">
                    <img src={user.avatar_url} alt='profile avatar' />
                    <div className="card-info">
                        <h3 className="name">{user.name}</h3>
                        <p className="username">{user.login}</p>
                        <p>Location: {users.location}</p>
                        <p>Profile:
                            <a href={user.url}>{user.url}</a>
                        </p>
                        <p>Followers: {user.followers}</p>
                        <p>Following: {users.following}</p>
                        <p>Bio: {user.bio}</p>
                    </div>
                </div>
            ))}
        </div>        )
    }
}

export default Card;