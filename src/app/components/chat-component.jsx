"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as React from "react";

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");

  const handleChat = async () => {
    try {
      const res = await fetch(
        `https://rag-main-main.onrender.com/chat?q=${encodeURIComponent(message)}`
      );
      const data = await res.json();
      setAnswer(data.answer);
      console.log(data);
    } catch (error) {
      console.error("Chat fetch failed:", error);
    }
  };

  return (
    <div className="space-y-4 p-4">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type question here"
      />
      <Button onClick={handleChat}>Send</Button>
      {answer && <p className="mt-4 text-gray-800 font-medium">{answer}</p>}
    </div>
  );
};

export default ChatComponent;
