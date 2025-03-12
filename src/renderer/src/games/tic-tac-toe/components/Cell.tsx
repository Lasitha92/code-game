import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
interface CellProps {
  value: "X" | "O" | "";
}

export default function Cell(props: CellProps) {
  const [cellValue, setCellValue] = useState("");

  useEffect(() => {
    setCellValue(props.value);
  })

  function handleClick() {
    setCellValue(props.value);
  }

  return (
    <Button className="w-100" variant="outline-secondary" onClick={handleClick}>
      {cellValue}
    </Button>
  );
}
