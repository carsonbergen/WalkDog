import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            {/* Testing  */}
            <div className="p-2 bg-secondary text-primary flex flex-row space-x-4">
                <Link to="home">Home</Link>
                <Link to="feed">Feed</Link>
                <Link to="my-profile">My Profile</Link>
                <Link to="login/">Login</Link>
                <Link to="/this-page-does-not-exist">404 Page</Link>
            </div>
        </>
    );
}