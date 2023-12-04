import React, { useState } from 'react';
import { UserButton } from "./Button";
import Image from "./Image";
import { DateSpan, DistanceSpan, DogSpan, LocationSpan } from "./Misc/InlineComponents";
import { Heart } from 'phosphor-react';

export default function FeedItem(props) {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div key={props.id} className="flex flex-row bg-primary border-secondary rounded-md border-2">
        {props.imageSrc && (
          <Image
            src={props.imageSrc}
            alt={props.imageAlt}
            className="border-r-2 rounded-r-md"
          />
        )}
        <div className="font-nunito flex flex-col justify-start items-start space-y-1 px-2 py-1 w-full">
          <div className="flex flex-wrap items-baseline">
            <UserButton to={props.profileLink}>{props.author}</UserButton>
            <span className="mx-1">walked</span>
            <DogSpan>{props.dog}</DogSpan>
            <span className="mx-1">on</span>
            <DateSpan>{props.date}</DateSpan>
            <span className="mx-1">for</span>
            <DistanceSpan>{props.distance}</DistanceSpan>
            <span className="mx-4">at</span>
            <LocationSpan>{props.location}</LocationSpan>
          </div>
          <button
            onClick={() => {
              setLiked(!liked);
              // props.onLike(props.id);
            }}
            className={`like-button ml-auto ${liked ? 'liked' : ''}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className={`stroke-[2rem] ${liked ? "fill-red" : "fill-primary"} stroke-black paint-stroke w-8 h-8 transition-all duration-750`}>
              <path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}