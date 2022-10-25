import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div className='single-post'>
            <h2>Name:{props.name}</h2>
            <p>{props.body}</p>
        </div>
    );
};

export default Post;