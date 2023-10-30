import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";

export default function Testing() {
    const [text, setText] = useState('');

    useEffect(() => {
        console.log("text was changed to ", text);
    }, [text]);

    return (
        <>
            <TextInput>

            </TextInput>
            {/* 
                How to set arguments for the text input. 
            */}
            <TextInput 
                title="My title"
                id="my text input"
                value="test"
                onChange={(e) => {
                    setText(e.target.value)
                }}
                placeholder="Hello, world!"
            >
            </TextInput>
        </>
    );
}