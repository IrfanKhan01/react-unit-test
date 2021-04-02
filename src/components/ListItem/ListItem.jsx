import React from 'react'
import './ListItem.css'

export default function ListItem({item}) {
    return (
        <div className="item">
            <h2>{item}</h2>
        </div>
    )
}
