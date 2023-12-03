import { useState } from "react";
import { AcceptButton, OptionalButton } from "../components/Button";
import TextInput from "../components/TextInput";
import { Link, useNavigate } from "react-router-dom";
import { getUserData, logInUser } from "./../lib/file";
import Cookies from "js-cookie";
import { ForgotPasswordModal } from "../components/Modal";

export default function Login() {
    const navigate = useNavigate();
    const  [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
    const [errorData, setErrorData] = useState({
        "email": '',
        "password": '',
    });
    const [noUserFoundError, setNoUserFoundError] = useState(false);

    const [formData, setFormData] = useState({
        "email": '',
        "password": '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrorData({
            "email": formData.email == "" ? "required" : "",
            "password": formData.password == "" ? "required" : ""
        }) 
        
        // Login user
        const userData = getUserData(formData.email);

        // If could not find user with email and password AND fields are filled in, show an error
        if (formData.email != "" && formData.password != "" && userData == undefined) {
            setNoUserFoundError(true);
        }
        
        logInUser(userData);

        const loggedIn = Cookies.get("user-logged-in");

        console.log("user logged in:", loggedIn)

        if (loggedIn) {
            console.log("User logged in successfully")
            navigate("/home");
        }

        setFormData({
            "email": '',
            "password": '',
        });
    }

    return (
        <>
            <ForgotPasswordModal
                onClose={() => {
                    setForgotPasswordOpen(false);
                }}
                open={forgotPasswordOpen}
            />
            <div 
                className={`grid grid-cols-1 place-content-center px-10`}
            >
                <h1 className={`place-self-center text-5xl font-black`}>
                    Walk. Dog.
                </h1>
                <div className={`place-self-center pt-1 pb-6 font-semibold`}>
                    Welcome back! We're glad to see you.
                </div>
                <div className="text-dark_red pb-2">
                    {
                        noUserFoundError == true ? "* No user found with same email and password": null
                    }
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
                            // Reset no user found error if email is changed
                            setNoUserFoundError(false);
                        }}
                        placeholder="johnDoe@gmail.com"
                        error={errorData.email}
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
                            // Reset no user found error if password is changed
                            setNoUserFoundError(false);
                        }}
                        error={errorData.password}
                    >
                        <button
                            className="text-left underline underline-offset-1 w-40 pt-1"
                            onClick={() => {
                                setForgotPasswordOpen(!forgotPasswordOpen);
                            }}
                        >
                            Forgot password?
                        </button>
                    </TextInput>
                    <div
                        className={`w-full place-self-center mt-3 mb-14`}
                    >
                        <AcceptButton type="submit">
                            Log in!
                        </AcceptButton>
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