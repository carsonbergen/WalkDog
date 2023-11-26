import { useEffect, useState } from "react";
import { AcceptButton, OptionalButton } from "../components/Button";
import TextInput from "../components/TextInput";
import { Link, redirect, useNavigate } from "react-router-dom";
import { getUserData, logInUser } from "./../lib/file";
import Cookies from "js-cookie";

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        "email": '',
        "password": '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Login user
        const userData = getUserData(formData);
        logInUser(userData);

        const loggedIn = Cookies.get("user-logged-in");

        console.log("user logged in:", loggedIn)

        if (loggedIn) {
            console.log("User logged in successfully")
            navigate("/home");
        } else {
            console.log("Not logged in!");
            // Display an error to the user
            // TODO
        }

        setFormData({
            "email": '',
            "password": '',
        });
    }

    return (
        <>
            <div 
                className={`grid grid-cols-1 place-content-center px-10`}
            >
                <h1 className={`place-self-center text-5xl font-black`}>
                    Walk. Dog.
                </h1>
                <div className={`place-self-center pt-1 pb-6 font-semibold`}>
                    Welcome back! We're glad to see you.
                </div>
                <form 
                    className={`grid grid-cols-1 gap-4 place-content-center`}
                    onSubmit={handleSubmit}
                >
                    <TextInput 
                        title="What is your account's email?"
                        type="text"
                        id="email"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                "email": e.target.value,
                            });
                        }}
                        placeholder="johnDoe@gmail.com"
                    />
                    <TextInput 
                        title="What is your account's password?"
                        type="password"
                        id="password"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                "password": e.target.value,
                            });
                        }}
                    />
                    <div
                        className={`w-full place-self-center mt-3 mb-14`}
                    >
                        {/* TODO remove link after verification is added */}
                        {/* <Link to="/feed"> */}
                            <AcceptButton
                            // TODO change to go to profile, and verification
                                onClick={() => {
                                    // console.log("Changing page, replace this");
                                }}
                                type="submit"
                            >
                                Log in!
                            </AcceptButton>
                        {/* </Link> */}
                    </div>
                </form>
                <div className={`place-self-center`}>
                    <div
                        className={`font-bold text-base  text-dark_grey`}
                    >
                        Don't have an account?
                    </div>
                    <Link to="/">
                        <OptionalButton> 
                            Sign up!
                        </OptionalButton>
                    </Link>
                </div>
            </div>
        </>
    );
}