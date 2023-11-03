import React from 'react';
import '../css/posts.css';

export default function Feed() {
    
    const posts = [
        {
            id: 1,
            author: 'Carson',
            content: 'Carson walked his dog at 5:00 PM today!',
            image:'/images/carson.jpeg'
        },
        {
            id: 2,
            author: 'Alex',
            content: 'Alex walked his dog at 10:37 AM today!',
            image:'/images/alex.jpeg'
        },
        {
            id: 3,
            author: 'Nusyba',
            content: 'Nusyba walked her dog at 7:14 PM on Tuesday.',
            image:'/images/nusyba.jpg'
        },
        {
            id: 4,
            author: 'Jacob',
            content: 'Jacob walked his dog at 9:54 PM on Sunday.',
            image:'/images/jacob.jpg'
        },
        {
            id: 5,
            author: 'Alliana',
            content: 'Alliana walked her dog at 3:05 PM on Oct 28, 2023',
            image:'/images/alliana.jpeg'
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
