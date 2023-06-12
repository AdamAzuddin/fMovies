"use client"

import { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { textSpanIntersectsWith } from "typescript";

const CommentSection = () => {
  const [text, setText] = useState("");
  const onChange = ({ target }) => setText(target.value);
  
  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        label="Comment"
        value={textSpanIntersectsWith}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={text ? "blue" : "blue-gray"}
        disabled={!text}
        className="!absolute right-1 top-1 rounded"
      >
        Invite
      </Button>
    </div>
  );
}

export default CommentSection