import { useState } from "react";
import { Button } from "react-bootstrap";


export default function Cell() {
const [value, setValue] = useState("");

  function handleClick() {
    setValue("X");
  }

  return (
    <Button className="w-100" variant="outline-secondary" onClick={handleClick}>
      {value}
    </Button>
  );
}
