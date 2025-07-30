import { Card, Form, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Question } from "../data/questions";

interface Props {
  question: Question;
  value?: number;
  onChange: (value: number) => void;
  isAnswered: boolean; // New prop to indicate if the question is answered
}

export default function QuestionCard({
  question,
  value,
  onChange,
  isAnswered,
}: Props) {
  return (
    <Card
      className="mb-4 p-3"
      style={{
        backgroundColor: isAnswered ? "#e6f3ff" : "#ffffff",
        boxShadow: isAnswered
          ? "0 4px 6px rgba(0, 123, 255, 0.15)"
          : "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <Card.Body>
        <Card.Title className="d-flex align-items-center">
          <Badge
            bg="secondary"
            className="me-2"
            style={{
              fontSize: "0.75rem",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.4rem",
              backgroundColor: "#5a6268",
              color: "#ffffff",
            }}
          >
            Câu {question.displayOrder}
          </Badge>
          {question.text}
          {isAnswered && (
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="ms-2 text-success"
              title="Đã trả lời"
            />
          )}
        </Card.Title>
        <Form.Range
          min={1}
          max={5}
          value={value || 3}
          onChange={(e) => onChange(Number(e.target.value))}
          className="my-3"
        />
        <div className="text-muted">
          Mức độ thích: <strong>{value || 3}</strong> / 5
        </div>
      </Card.Body>
    </Card>
  );
}
