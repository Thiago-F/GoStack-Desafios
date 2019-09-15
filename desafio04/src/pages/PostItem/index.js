import React from 'react';

import './PostItem.css'
import Comment from '../../components/Comment'

export default function PostItem({ data }) {
    return (
        <div className="container">
            <div className="post">
                <div className="user-sec">
                    <div className="profile">
                        <img src={data.author.avatar} alt={data.author.name} />
                    </div>
                    <div className="infos">
                        <div className="name">{data.author.name}</div>
                        <div className="date">{data.date}</div>
                    </div>
                </div>
                <div className="post-desc">
                    {data.content}
                </div>

                <div className="comments">
                    {data.comments.map(comment => (
                        <Comment key={comment.id} data={comment} />
                    ))}
                </div>
            </div>
        </div>
    );
}
