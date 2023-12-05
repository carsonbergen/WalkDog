import React from 'react';
import '../css/posts.css';
import FeedItem from '../components/FeedItem';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { getUserData } from '../lib/file';

export default function Feed() {
    const email = Cookies.get("user");
    const [userData, setUserData] = useState(getUserData(email));

    const [posts, setPosts] = useState(userData.posts);

    return (
        <div>
            <div className="feed-container space-y-2">
                {posts.map((post) => (
                    <FeedItem
                        key={post.id}
                        id={post.id}
                        imageSrc={post.imageSrc}
                        author={post.author}
                        dog={post.dog}
                        location={post.location}
                        distance={post.distance}
                        date={post.date}
                        profileLink={post.profileLink}
                    />
                ))}
            </div>
        </div>
    );
}
