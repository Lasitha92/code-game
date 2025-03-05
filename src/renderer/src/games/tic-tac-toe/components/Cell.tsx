import { Button } from "react-bootstrap";

interface CellProps {
  value: "X" | "O";
}

export default function Cell({ value }: CellProps) {
  return <Button variant="outline-secondary">{value}</Button>;
}
