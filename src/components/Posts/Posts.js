import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    return (
        <div>
            <h1>Posts:{posts.length}</h1>
          <div className='posts-style'>
          {
                posts.map(post => <Post 
                    name={post.title}
                    body={post.body}
                ></Post>)
            }
          </div>
        </div>
    );
};

export default Posts;