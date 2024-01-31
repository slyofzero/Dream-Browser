import { AIChatI } from "@/types/aiChat";
import { classNames } from "@/utils/style";

interface MessageProps {
  message: AIChatI;
}

export function Message({ message }: MessageProps) {
  const { from, text } = message;

  return (
    <div
      className={classNames(
        "p-2 rounded-lg w-fit max-w-[85%]",
        from === "ai" ? "bg-main-2" : "bg-main-3 ml-auto"
      )}
    >
      {text}
    </div>
  );
}
