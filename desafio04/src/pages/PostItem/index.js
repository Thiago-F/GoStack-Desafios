import React from 'react';

import './PostItem.css'

export default function PostItem() {
    return (
        <div className="container">
            <div className="post">
                <div className="user-sec">
                    <div className="profile"></div>
                    <div className="infos">
                        <div className="name">Thiago Fialho</div>
                        <div className="date">04 Jun 2019</div>
                    </div>
                </div>
                <div className="post-desc">
                    Pessoal, alguém sabe se a Rocketseat está contratando?
                </div>
            </div>
        </div>
    );
}
