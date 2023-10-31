import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import Achievement from "../components/Achievement";
import { PawPrint } from "phosphor-react";
import ToggleSwitch from "../components/ToggleSwitch";
import { AcceptButton, RejectButton } from "../components/Button";

export default function Testing() {
    const [text, setText] = useState('');

    useEffect(() => {
        console.log("text was changed to: ", text);
        // Now we can do whatever we want with this text
        // It could be a email, password, or whatever really.
    }, [text]);

    const handleAccept = () => {
        console.log("I accept!");
    }

    const handleReject = () => {
        console.log("I reject!");
    }

    return (
        <>
            <h1 className="text-3xl">
                TextInput examples
            </h1>
            {/* Plain text input */}
            <TextInput />
            {/* How to set arguments for the text input */}
            <TextInput
                title="My TextInput with a title"
            />
            {/* TextInput with a function. This is the preferred way of doing this sort of thing. */}
            <TextInput 
                title="My TextInput with a function (check the console logs)"
                id="my text input"
                value="test"
                onChange={(e) => {
                    setText(e.target.value)
                }}
                placeholder="Hello, world!"
            />

            <span>
                This is our text: {text}
            </span>

            {/* <h1 className="text-3xl">
                Achievement examples
            </h1> */}
            {/* <div className="flex flex-row space-x-2">
                <Achievement 
                    icon={<PawPrint size={32} weight="fill" />}
                    description={
                        `This is my test description for an achievement that was not given a title!`
                    }
                />
                <Achievement 
                    icon={<PawPrint size={32} weight="fill" />}
                    title="Avid Walker"
                    description={
                        `You walked your dog over 5km!`
                    }
                />
            </div>
            <ToggleSwitch
                onChange={() => {console.log("Someone changed me!")}}
            /> */}
            <div className="flex flex-col space-y-2">
                <AcceptButton
                    onClick={handleAccept}
                >
                    Accept
                </AcceptButton>
                <RejectButton
                    onClick={handleReject}
                >
                    Reject
                </RejectButton>
            </div>

        </>
    );
}