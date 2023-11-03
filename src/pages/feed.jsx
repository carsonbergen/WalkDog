import React from 'react';
import '../css/posts.css';

export default function Feed() {
    const posts = [
        {
            id: 1,
            author: 'Carson',
            dog: 'Juno',
            date: 'Oct. 23rd, 2023',
            distance: '12km',
            location: 'River Park',
            content: 'Carson walked his dog at 5:00 PM today!',
            image:'/images/carson.jpeg'
        },
        {
            id: 2,
            author: 'Alex',
            dog: 'Rex',
            date: 'Oct. 12th, 2023',
            distance: '24km',
            location: 'River Park',
            content: 'Alex walked his dog at 10:37 AM today!',
            image:'/images/alex.jpeg'
        },
        {
            id: 3,
            author: 'Nusyba',
            dog: 'Elf',
            date: 'Oct. 10th, 2023',
            distance: '20km',
            location: 'River Park',
            content: 'Nusyba walked her dog at 7:14 PM on Tuesday.',
            image:'/images/nusyba.jpg'
        },
        {
            id: 4,
            author: 'Jacob',
            dog: 'Astro',
            date: 'Oct. 9th, 2023',
            distance: '20km',
            location: 'River Park',
            content: 'Jacob walked his dog at 9:54 PM on Sunday.',
            image:'/images/jacob.jpg'
        },
        {
            id: 5,
            author: 'Alliana',
            dog: 'Haru',
            date: 'Oct. 9th, 2023',
            distance: '20km',
            location: 'River Park',
            content: 'Alliana walked her dog at 3:05 PM on Oct 28, 2023',
            image:'/images/alliana.jpeg'
        }, 
        // Add more posts as needed
    ];
    return (
        <div>
            <div className="feed-container space-y-2">
                {posts.map((post) => (
                    // bg-pink border-2 border-secondary rounded-md p-2
                    <div key={post.id} className="post"> 
                        <div className="font-nunito font-semibold text-3xl">{post.author}</div>
                        {post.image && (
                            <img
                                src={post.image}
                                alt={`Image for post by ${post.author}`}
                                className="post-image border-2 border-secondary rounded-md"
                            />
                        )}
                        <div className="font-nunito">
                            {`${post.author} walked ${post.dog} on ${post.date} for ${post.distance} at ${post.location}.`}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
