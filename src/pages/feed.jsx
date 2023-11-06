import React from 'react';
import '../css/posts.css';
import FeedItem from '../components/FeedItem';

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
            imageSrc: '/images/carson.jpeg',
            profileLink: '/profile/carsonbergen'
        },
        {
            id: 2,
            author: 'Alex',
            dog: 'Rex',
            date: 'Oct. 12th, 2023',
            distance: '24km',
            location: 'River Park',
            content: 'Alex walked his dog at 10:37 AM today!',
            imageSrc: '/images/alex.jpeg',
            profileLink: '/profile/alexgalindo'
        },
        {
            id: 3,
            author: 'Nusyba',
            dog: 'Elf',
            date: 'Oct. 10th, 2023',
            distance: '20km',
            location: 'River Park',
            content: 'Nusyba walked her dog at 7:14 PM on Tuesday.',
            imageSrc: '/images/nusyba.jpg',
            profileLink: '/profile/nusyba'
        },
        {
            id: 4,
            author: 'Jacob',
            dog: 'Astro',
            date: 'Oct. 9th, 2023',
            distance: '20km',
            location: 'River Park',
            content: 'Jacob walked his dog at 9:54 PM on Sunday.',
            imageSrc: '/images/jacob.jpg',
            profileLink: "/profile/jacobadeyemo"
        },
        {
            id: 5,
            author: 'Alliana',
            dog: 'Haru',
            date: 'Oct. 9th, 2023',
            distance: '20km',
            location: 'River Park',
            content: 'Alliana walked her dog at 3:05 PM on Oct 28, 2023',
            imageSrc: '/images/alliana.jpeg',
            profileLink: '/profile/alliana'
        },
        // Add more posts as needed
    ];
    return (
        <div>
            <div className="feed-container space-y-2">
                {posts.map((post) => (
                    <FeedItem
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
