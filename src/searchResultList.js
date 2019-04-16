import React from 'react'

export default ({ items }) => (
    <div className="results">
        <ul>
            {items.map(item => (
                <li key={item.data.url}>
                    <a target="_blank" href={item.data.url}><h2>{item.data.title}</h2><p>{item.data.ups}</p></a>
                </li>
            ))}
        </ul>
    </div>
)