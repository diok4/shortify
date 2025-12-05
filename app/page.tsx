"use client";
import { ChatInput } from "@/src/widgets/chat/chat-input";
import { ChatOutput } from "@/src/widgets/chat/chat-output";

export default function HomePage() {
  return (
    <div>
      <ChatOutput />
      <ChatInput />
    </div>
  );
}
