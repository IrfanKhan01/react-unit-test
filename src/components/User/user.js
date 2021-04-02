import React from 'react'
import "./user.css";

export default function User(props) {
    const { item } = props
    return (
        <div className="user-card">
            <img className="user-avatar" src={item.avatar_url} style={{ height: 200, resize: 'horizontal' }} />
            <p className="user-name" style={{ marginRight: 10, marginLeft: 10 }}>{item.login}</p>
        </div>
    )
}
