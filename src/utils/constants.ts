import { AIChatI } from "@/types/aiChat";
import { ShortcutI } from "@/types/shortcut";

export const urlRegex = /^https?:\/\//;

export const shortCuts: ShortcutI[] = [
  {
    title: "X",
    image: "/shortcuts/twitter.png",
    pinned: true,
  },
  {
    title: "Telegram",
    image: "/shortcuts/telegram.png",
  },
  {
    title: "DexTools",
    image: "/shortcuts/dextools.svg",
  },
  {
    title: "Amazon",
    image: "/shortcuts/amazon.png",
  },
  {
    title: "Binance",
    image: "/shortcuts/binance.png",
  },
  {
    title: "Metamask",
    image: "/shortcuts/metamask.png",
  },
];

export const aiChat: AIChatI[] = [
  {
    from: "user",
    text: "Hi!",
    image: "/chat/user.jpg",
  },
  {
    from: "ai",
    text: "Hello! I am DreamAI,  your AI chatbot assistant here to help you. Feel free to ask me anything, and I'll do my best to provide you with useful information and assistance.",
    image: "/chat/chatbot.png",
  },
];
