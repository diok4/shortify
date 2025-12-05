"use client";
import { ChatInput } from "@/widgets/chat/chat-input";
import { ChatOutput } from "@/widgets/chat/chat-output";

export default function HomePage() {
  return (
    <div>
      <ChatOutput />
      <ChatInput />
    </div>
  );
}
