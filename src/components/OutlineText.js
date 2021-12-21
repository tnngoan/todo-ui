import React from "react";
import Textarea from "@material-tailwind/react/Textarea";

export default function OutlineText() {
  return (
    <Textarea
      color="green"
      size="regular"
      outline={false}
      placeholder="What do you need to do?"
    />
  );
}
