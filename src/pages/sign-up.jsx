import { AcceptButton, OptionalButton } from "../components/Button";
import TextInput from "../components/TextInput";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <>
            <div 
                className={`grid grid-cols-1 place-content-center px-10`}
            >
                <h1 className={`place-self-center pb-6 text-5xl font-black`}>
                    Walk. Dog.
                </h1>
                <form className={`grid grid-cols-1 gap-4 place-content-center`}>
                    <TextInput 
                        title="What would you like to be called?"
                        id="username"
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                        placeholder="John"
                    />
                    <TextInput 
                        title="What do you call your canine companion?"
                        id="dogName"
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                        placeholder="Juno"
                    />
                    <TextInput 
                        title="What is your preferred email address?"
                        id="email"
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                        placeholder="johnDoe@gmail.com"
                    />
                    <TextInput 
                        title="What would you like your password to be?"
                        id="password"
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                        type="password"
                    />
                    <div
                        className={`w-full place-self-center mt-3 mb-14`}
                    >
                    {/* Remove link after verification is added */}
                    <Link to="my-profile">
                        <AcceptButton
                        // TODO change to go to my profile, and verification
                            onClick={() => {
                                console.log("Accept!")
                            }}
                        >
                            Sign up!
                        </AcceptButton>
                    </Link>
                    </div>
                </form>
                <div className={`place-self-center`}>
                    <body
                        className={`font-bold text-base  text-dark_grey`}
                    >
                        Already have an account?
                    </body>
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