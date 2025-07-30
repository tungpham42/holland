import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
}: Props) {
  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <Button
        variant="outline-secondary"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
        Trang trước
      </Button>
      <span>
        Trang {currentPage} / {totalPages}
      </span>
      <Button
        variant="outline-secondary"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Trang sau
        <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
      </Button>
    </div>
  );
}
