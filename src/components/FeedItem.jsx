import { UserButton } from "./Button";
import Image from "./Image";
import { DateSpan, DistanceSpan, DogSpan, LocationSpan } from "./Misc/InlineComponents";

export default function FeedItem(props) {
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
                <div className="font-nunito px-2 flex flex-wrap justify-start items-baseline space-y-1 py-1">
                    <UserButton to={props.profileLink}>{props.author}</UserButton>
                    <span className="mx-1">walked</span>
                    <DogSpan>{props.dog}</DogSpan>
                    <span className="mx-1">on</span>
                    <DateSpan>{props.date}</DateSpan>
                    <span className="mx-1">for</span>
                    <DistanceSpan>{props.distance}</DistanceSpan>
                    <span className="mx-1">at</span>
                    <LocationSpan>{props.location}</LocationSpan>
                </div>
            </div>
        </>
    );
}