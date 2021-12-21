import React, { useRef } from "react";
import Button from "@material-tailwind/react/Button";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";

export default function NicePopover() {
  const buttonRef = useRef();

  return (
    <>
      <Button color="green" ref={buttonRef} ripple="light">
        Popover left
      </Button>

      <Popover placement="left" ref={buttonRef}>
        <PopoverContainer>
          <PopoverHeader>Popover left</PopoverHeader>
          <PopoverBody>
            And here's some amazing content. It's very engaging. Right?
          </PopoverBody>
        </PopoverContainer>
      </Popover>
    </>
  );
}
