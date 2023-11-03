import React from 'react';
import '../css/posts.css';

export default function Feed() {
    
    const posts = [
        {
            id: 1,
            author: 'Carson',
            content: 'Carson walked his dog at 5:00 PM today!',
            image:'https://images.app.goo.gl/uNuX1e6U2NYLczV79'
        },
        {
            id: 2,
            author: 'Alex',
            content: 'Alex walked his dog at 10:37 AM today!',
            image:'https://images.app.goo.gl/vh5YVAkmmNtxhpZR8'
        },
        {
            id: 3,
            author: 'Nysuba',
            content: 'Nysuba walked her dog at 7:14 PM on Tuesday.',
            image:'https://images.app.goo.gl/fudQSJr8uuhMWTSNA'
        },
        {
            id: 4,
            author: 'Jacob',
            content: 'Jacob walked his dog at 9:54 PM on Sunday.',
            image:'https://images.app.goo.gl/RRZomSckhXYJwiHJ9'
        },
        {
            id: 5,
            author: 'Alliana',
            content: 'Alliana walked her dog at 3:05 PM on Oct 28, 2023',
            image:'https://images.app.goo.gl/9uvgumbfc2VSbGSV6'
        }, 
        // Add more posts as needed
    ];
    return (
        <div>
            <h1>Feed Page</h1>
            <div className="feed-container">
                {posts.map((post) => (
                    <div key={post.id} className="post">
                        <div className="author">{post.author}</div>
                        {post.image && (
                            <img
                                src={post.image}
                                alt={`Image for post by ${post.author}`}
                                className="post-image"
                            />
                        )}
                        <div className="content">{post.content}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
