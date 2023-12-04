import React, { useState } from 'react';
import { UserButton } from "./Button";
import Image from "./Image";
import { DateSpan, DistanceSpan, DogSpan, LocationSpan } from "./Misc/InlineComponents";

export default function FeedItem(props) {
    const [liked, setLiked] = useState(false);

    return (
        <>
          <div key={props.id} className="flex flex-row bg-pink border-secondary rounded-md border-2">
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
                {liked ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
        </>
      );
    }