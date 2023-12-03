import { AcceptButton, OptionalButton } from "../components/Button";
import TextInput from "../components/TextInput";
import { Link, useNavigate  } from "react-router-dom";
import { useState } from "react";

export default function SignUp() {
    const navigate = useNavigate();
    const [errorData, setErrorData] = useState({
        "username": '',
        "name": '',
        "dogName": '',
        "email": '',
        "password": '',
        "confirmPassword": '',
    });
    const [formData, setFormData] = useState({
        "username": '',
        "name": '',
        "dogName": '',
        "email": '',
        "password": '',
        "confirmPassword": '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        let confirmPasswordError = formData.confirmPassword == "" ? "required" : "";

        // Check for password mismatch when both password fields have values
        if(formData.password != formData.confirmPassword && formData.password != "" && formData.confirmPassword != "") {
            confirmPasswordError = "* Please make sure passwords match";
        }
        setErrorData({
            "username": formData.username == "" ? "required" : "",
            "name": formData.name == "" ? "required" : "",
            "dogName": formData.dogName == "" ? "required" : "",
            "email": formData.email == "" ? "required" : "",
            "password": formData.password == "" ? "required" : "",
            "confirmPassword": confirmPasswordError,
        });
        if(formData.username != "" && formData.dogName != "" && formData.email != ""
        && formData.password != "") {
            navigate("/my-profile");
        }
    }

    return (
        <>
            <div 
                className={`grid grid-cols-1 place-content-center px-10`}
            >
                <h1 className={`place-self-center pb-6 text-5xl font-black`}>
                    Walk. Dog.
                </h1>
                <form
                    className={`grid grid-cols-1 gap-4 place-content-center`}
                    onSubmit={handleSubmit}
                >
                    <TextInput 
                        title="What would you like to be called?"
                        id="username"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                "username": e.target.value,
                            });
                        }}
                        placeholder="john_loves_dogs"
                        error={errorData.username}
                    />
                    <TextInput 
                        title="What is your name?"
                        id="name"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                "name": e.target.value,
                            });
                        }}
                        placeholder="John"
                        error={errorData.name}
                    />
                    <TextInput 
                        title="What do you call your canine companion?"
                        id="dogName"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                "dogName": e.target.value,
                            });
                        }}
                        placeholder="Juno"
                        error={errorData.dogName}
                    />
                    <TextInput 
                        title="What is your preferred email address?"
                        id="email"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                "email": e.target.value,
                            });
                        }}
                        placeholder="johnDoe@gmail.com"
                        error={errorData.email}
                    />
                    <TextInput 
                        title="What would you like your password to be?"
                        id="password"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                "password": e.target.value,
                            });
                        }}
                        type="password"
                        error={errorData.password}
                    />
                    <TextInput 
                        title="Please confirm password"
                        id="confirmPassword"
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                "confirmPassword": e.target.value,
                            });
                        }}
                        type="password"
                        error={errorData.confirmPassword}
                    />
                    <div
                        className={`w-full place-self-center mt-3 mb-14`}
                    >
                    <AcceptButton type="submit">
                        Sign up!
                    </AcceptButton>
                    </div>
                </form>
                <div className={`place-self-center`}>
                    <div
                        className={`font-bold text-base  text-dark_grey`}
                    >
                        Already have an account?
                    </div>
                    <Link to="login">
                        <OptionalButton>
                            Log in!
                        </OptionalButton>
                    </Link>
                </div>
            </div>
        </>
    );
}