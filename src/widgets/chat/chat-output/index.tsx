"use client";
import { useState } from "react";

export const ChatOutput = () => {
  const [post, isPost] = useState(false);

  return (
    <div>
      {post ? <div className="">Text</div> : <div className="">No Text</div>}
    </div>
  );
};
