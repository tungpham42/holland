import { Card, Form, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Question } from "../data/questions";

interface Props {
  question: Question;
  value?: number;
  onChange: (value: number) => void;
}

export default function QuestionCard({ question, value, onChange }: Props) {
  return (
    <Card className="mb-4 p-3">
      <Card.Body>
        <Card.Title className="d-flex align-items-center">
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className="me-2 text-primary"
          />
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
