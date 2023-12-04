import { useState } from "react";
import Modal from "./Modal";

export default function Achievement(props) {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <Modal
                open={modalOpen}
                onClose={() => { setModalOpen(false) }}
                className="flex justify-center items-center"
                background="bg-purple"
            >
                <div className="flex flex-row space-x-1 justify-start items-center">
                    {/* Icons */}
                    <span className="font-black text-lg">{props.title ?? 'Error: No title given!'}</span>
                </div>
                <p className="font-semibold">{props.description}</p>
            </Modal>
            <div
                className="bg-purple border-2 border-secondary rounded-md px-1 max-w-[10rem]"
                onClick={() => { setModalOpen(true) }}
            >
                <div className="flex flex-row space-x-1 justify-start items-center">
                    {/* Icons */}
                    <span className="font-black text-lg">{props.title ?? 'Error: No title given!'}</span>
                </div>
                {props.showDescriptionInline ?
                    <p className="font-semibold">{props.description}</p>
                    :
                    null
                }
            </div>
        </>
    );
}