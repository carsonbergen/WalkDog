import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <div className="absolute bottom-0 left-0 w-full py-2 px-8">
        <div className="absolute bottom-0 left-0 z-0 w-full h-full pt-10 pb-2 px-8">
          <div className="h-full w-full border-2 border-secondary rounded-lg">
          </div>
        </div>
        <div className="relative flex flex-row justify-between w-full items-baseline px-1 py-1">
          <div className="flex-shrink-0 w-[25%] flex flex-row justify-center">
            <Link
              to="feed"
              className={`flex items-center justify-center rounded-lg bg-purple w-16 h-10 p-4 border-secondary border-2 stroke-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="stroke-[1rem] fill-yellow stroke-black"
              >
                <path d="M224,120v16a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a8,8,0,0,1,8-8H216A8,8,0,0,1,224,120Zm-8,56H40a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V184A8,8,0,0,0,216,176Zm0-128H40a8,8,0,0,0-8,8V72a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z"></path>
              </svg>
            </Link>
          </div>
          <div className="flex-grow flex flex-row justify-center">
            <Link
              to="home"
              className={`flex items-center justify-center rounded-full bg-purple w-20 h-20 p-2 border-secondary border-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="stroke-[0.5rem] fill-yellow stroke-black"
              >
                <path d="M240,108a28,28,0,1,1-28-28A28,28,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28,28,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28,28,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28,28,0,0,0,164,88Zm23.12,60.86a35.3,35.3,0,0,1-16.87-21.14,44,44,0,0,0-84.5,0A35.25,35.25,0,0,1,69,148.82,40,40,0,0,0,88,224a39.48,39.48,0,0,0,15.52-3.13,64.09,64.09,0,0,1,48.87,0,40,40,0,0,0,34.73-72Z" />
              </svg>
            </Link>
          </div>
          <div className="flex-shrink-0 w-[25%] flex flex-row justify-center">
            <Link
              to="my-profile"
              className={`flex items-center justify-center rounded-lg bg-purple w-16 h-10 p-4 border-secondary border-2 stroke-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="stroke-[1rem] fill-yellow stroke-black"
              >
                <path d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
