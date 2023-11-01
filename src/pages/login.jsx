import { AcceptButton, OptionalButton } from "../components/Button";
import TextInput from "../components/TextInput";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div 
                className={`grid grid-cols-1 place-content-center px-10`}
            >
                <h1 className={`place-self-center text-5xl font-black`}>
                    Walk. Dog.
                </h1>
                <body className={`place-self-center pt-1 pb-6 font-semibold`}>
                    Welcome back! We're glad to see you.
                </body>
                <form className={`grid grid-cols-1 gap-4 place-content-center`}>
                    <TextInput 
                        title="What is your account's email?"
                        id="email"
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                        placeholder="johnDoe@gmail.com"
                    />
                    <TextInput 
                        title="What is your account's password?"
                        id="password"
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                        type="password"
                    />
                    <div
                        className={`w-full place-self-center mt-3 mb-14`}
                    >
                        <AcceptButton
                        // TODO change to go to profile, and verification
                            onClick={() => {
                                console.log("Accept!")
                            }}
                        >
                            Log in!
                        </AcceptButton>
                    </div>
                </form>
                <div className={`place-self-center`}>
                    <body
                        className={`font-bold text-base  text-dark_grey`}
                    >
                        Don't have an account?
                    </body>
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