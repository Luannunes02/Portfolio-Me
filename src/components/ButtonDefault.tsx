import React from "react";

import { Button } from "../styles/ButtonDefault";

interface Button {
  action?: any;
  text: string;
  id?: string;
}

export default function ButtonDefault({ text, action, id }: Button) {
  return (
    <a href={`#${id}`}>
      <Button onClick={action} >
        {text}
      </Button>
    </a>
  );
}
