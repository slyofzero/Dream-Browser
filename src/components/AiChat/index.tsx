import { RocketIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { ShowWhen } from "../ShowWhen";
import { aiChat } from "@/utils";
import { Message } from "./Message";

export function AiChat() {
  const [showChat, setShowChat] = useState(false);
  const onClick = () => setShowChat((prev) => !prev);

  const chat = (
    <div className="z-10 h-96 w-72 absolute top-16 right-40 bg-main-3/80 backdrop-blur rounded-md p-4 flex flex-col text-xs gap-4 justify-between">
      <h1 className="mx-auto select-none">DreamAI</h1>

      <div className="flex flex-col gap-4">
        {aiChat.map((message, key) => (
          <Message message={message} key={key} />
        ))}

        <div className="flex gap-1">
          <input type="text" className="flex-grow bg-main-4 h-8 p-2 rounded-md text-gray-200" />
          <button>
            <PaperPlaneIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button onClick={onClick}>
        <RocketIcon className="h-4 w-4" />
      </button>

      <ShowWhen show={chat} when={showChat} />
    </>
  );
}
