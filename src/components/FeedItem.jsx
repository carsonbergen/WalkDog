import React, { useEffect, useState } from 'react';
import { UserButton } from "./Button";
import Image from "./Image";
import { DateSpan, DistanceSpan, DogSpan, LocationSpan } from "./Misc/InlineComponents";
import { Heart } from 'phosphor-react';
import { getPostLikedStatus, setPostLikedStatus, getPostDeletedStatus, setPostDeletedStatus } from '../lib/file';
import Cookies from 'js-cookie';
import { getUserData } from '../lib/file';

export default function FeedItem(props) {
  const email = Cookies.get("user");
  const userData = getUserData(email);

  const [liked, setLiked] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [postDeleted, setPostDeleted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLiked(getPostLikedStatus(email, props.id));
    setPostDeleted(getPostDeletedStatus(email, props.id))
    setMounted(true);
  }, []);

  const handleDeleteClick = () => {
    setShowDeletePopup(true);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };

  const handleConfirmDelete = () => {
    // Perform delete action here
    setShowDeletePopup(false);
    setPostDeleted(true);
    setPostDeletedStatus(email, props.id, true);
  };

  return (
    <>
      {mounted ?
        <>
          <div key={props.id} className={`flex flex-row bg-primary border-secondary rounded-md border-2 ${postDeleted ? "opacity-0" : "opacity-100"} transition-opacity duration-200`}>
            {props.imageSrc && (
              <Image
                src={props.imageSrc}
                alt={props.imageAlt}
                className="border-r-2 rounded-r-md"
              />
            )}
            <div className="font-nunito flex flex-col justify-start items-start space-y-1 px-2 py-1 w-full">
              <div className="flex flex-wrap items-baseline space-y-1">
                <UserButton to={props.profileLink}>{props.author}</UserButton>
                <span className="mx-1">walked</span>
                <DogSpan>{props.dog}</DogSpan>
                <span className="mx-1">on</span>
                <DateSpan>{props.date}</DateSpan>
                <span className="mx-1">for</span>
                <DistanceSpan>{props.distance}</DistanceSpan>
                <span className="mx-4">at</span>
                <LocationSpan>{props.location}</LocationSpan>
                <button
                  onClick={handleDeleteClick}
                  className="absolute right-6 text-black"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#000000" viewBox="0 0 256 256"><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Zm0-64A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,32Zm0,144a32,32,0,1,0,32,32A32,32,0,0,0,128,176Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,224Z"></path></svg>
                </button>
              </div>
              <button
                onClick={() => {
                  setLiked(!liked);
                  setPostLikedStatus(email, props.id, !liked);
                }}
                className={`like-button ml-auto ${liked ? 'liked' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={`stroke-[2rem] ${liked ? "fill-red" : "fill-primary"} stroke-black paint-stroke w-8 h-8 transition-all duration-750`}>
                  <path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"></path>
                </svg>
              </button>
            </div>
          </div>
          {showDeletePopup && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-20">
              <div className="bg-white p-4 rounded-md shadow-md">
                <p className="text-red-500">Warning: This action cannot be undone!</p>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={handleCancelDelete}
                    className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmDelete}
                    className="mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                  >
                    Delete Post
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
        : null
      }
    </>
  );
}