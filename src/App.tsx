import React, { useEffect, useState } from "react";
import { Button, Container, Card, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { resetTest, Question } from "./data/questions";
import { HollandType } from "./data/riasecDescriptions";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import MainBrandLogo from "./components/MainBrandLogo";

type Scores = Record<HollandType, number>;

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number | null>>({});
  const [result, setResult] = useState<Scores | null>(null);

  useEffect(() => {
    const shuffled = resetTest();
    setQuestions(shuffled);
    const initialAnswers: Record<number, number | null> = {};
    shuffled.forEach((q) => (initialAnswers[q.id] = null));
    setAnswers(initialAnswers);
  }, []);

  const handleChange = (id: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const scores: Scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    for (const q of questions) {
      const answer = answers[q.id];
      if (answer !== null) scores[q.type] += answer;
    }
    setResult(scores);
    localStorage.setItem("holland_scores", JSON.stringify(scores));
  };

  const handleReset = () => {
    const shuffled = resetTest();
    setQuestions(shuffled);
    const resetAnswers: Record<number, number | null> = {};
    shuffled.forEach((q) => (resetAnswers[q.id] = null));
    setAnswers(resetAnswers);
    setResult(null);
    localStorage.removeItem("holland_scores");
  };

  const totalAnswered = Object.values(answers).filter((v) => v !== null).length;
  const allAnswered = totalAnswered === questions.length;

  return (
    <Container className="my-5">
      <MainBrandLogo
        logoSrc="/soft-logo.webp"
        mainDomain="soft.io.vn"
        dismissible={false}
        altText="Logo Soft"
      />
      <Card className="p-4 mb-4">
        <h2 className="text-center mb-4">
          <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
          Trắc nghiệm tính cách Holland (RIASEC)
        </h2>

        {result ? (
          <>
            <Result scores={result} />
            <Button
              variant="outline-danger"
              onClick={handleReset}
              className="mt-4 w-100"
            >
              <FontAwesomeIcon icon={faRedo} className="me-2" />
              Làm lại bài kiểm tra
            </Button>
          </>
        ) : (
          <>
            <ProgressBar
              now={(totalAnswered / questions.length) * 100}
              label={`${totalAnswered}/${questions.length}`}
              className="mb-4"
              variant="info"
            />
            {questions.map((q) => (
              <QuestionCard
                key={q.id}
                question={q}
                value={answers[q.id] || 3}
                onChange={(val) => handleChange(q.id, val)}
              />
            ))}
            <div className="d-flex gap-3 mt-4">
              <Button
                variant="primary"
                onClick={handleSubmit}
                disabled={!allAnswered}
                className="flex-grow-1"
              >
                <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                Xem kết quả
              </Button>
              <Button
                variant="outline-danger"
                onClick={handleReset}
                className="flex-grow-1"
              >
                <FontAwesomeIcon icon={faRedo} className="me-2" />
                Làm lại
              </Button>
            </div>
          </>
        )}
      </Card>
    </Container>
  );
}
