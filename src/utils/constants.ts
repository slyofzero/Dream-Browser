import { AIChatI } from "@/types/aiChat";
import { ShortcutI } from "@/types/shortcut";

export const urlRegex = /^https?:\/\//;

export const shortCuts: ShortcutI[] = [
  {
    title: "YouTube",
    image: "/shortcuts/youtube.png",
    pinned: true,
  },
  {
    title: "Instagram",
    image: "/shortcuts/instagram.png",
  },
  {
    title: "X",
    image: "/shortcuts/twitter.png",
  },
  {
    title: "Telegram",
    image: "/shortcuts/telegram.png",
  },
  {
    title: "ChatGPT",
    image: "/shortcuts/chat-gpt.png",
  },
  {
    title: "IMDB",
    image: "/shortcuts/imdb.png",
  },
  {
    title: "Binance",
    image: "/shortcuts/binance.png",
  },
  {
    title: "Amazon",
    image: "/shortcuts/amazon.png",
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
    text: "Hello! I'm your AI chatbot assistant here to help you. Feel free to ask me anything, and I'll do my best to provide you with useful information and assistance.",
    image: "/chat/chatbot.png",
  },
];
