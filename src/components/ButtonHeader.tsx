import React from "react";

import { Button } from "../styles/ButtonHeader";

interface Button {
  action?: any;
  text: string;
}

export default function ButtonHeader({ text, action }: Button) {
  return (
    <Button onClick={action} >
      {text}
    </Button>
  );
}
