import React from 'react';

import './Comment.css'

export default function Comment({ data }) {
    return (
        <div className="comment">
            <div className="avatar">
                <div className="icon">
                    <img src={data.author.avatar} alt={data.author.name} />
                </div>
            </div>
            <div className="content">
                <span className="name">{data.author.name}</span>
                {data.content}
            </div>
        </div>
    );
}
