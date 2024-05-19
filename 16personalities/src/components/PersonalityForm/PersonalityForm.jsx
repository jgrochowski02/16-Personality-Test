import React, { useState } from "react";
import PersonalityQuestion from "../PersonalityQuestion/PersonalityQuestion";

const PersonalityForm = () => {
  const questions = [
    {
      question: "Czy lubisz pracować w zespole?",
      options: [
        "Zdecydowanie nie",
        "Raczej nie",
        "Nie wiem",
        "Raczej tak",
        "Zdecydowanie tak",
        "Nie dotyczy"
      ],
    },
    {
      question: "Czy lubisz pracować pod presją?",
      options: [
        "Zdecydowanie nie",
        "Raczej nie",
        "Nie wiem",
        "Raczej tak",
        "Zdecydowanie tak",
        "Nie dotyczy"
      ],
    },
    // Możesz dodać więcej pytań w podobnym formacie
  ];

  const [responses, setResponses] = useState(
    Array(questions.length).fill(Array(7).fill(false))
  );

  const handleOptionChange = (questionIndex, optionIndex, isChecked) => {
    const newResponses = responses.map((response, qIndex) =>
      qIndex === questionIndex
        ? response.map((res, oIndex) => (oIndex === optionIndex ? isChecked : res))
        : response
    );
    setResponses(newResponses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(responses);
    // Tutaj możesz dodać logikę, która przetwarza odpowiedzi
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      {questions.map((q, qIndex) => (
        <PersonalityQuestion
          key={qIndex}
          question={q.question}
          options={q.options}
          onOptionChange={(optionIndex, isChecked) =>
            handleOptionChange(qIndex, optionIndex, isChecked)
          }
        />
      ))}
      <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Submit
      </button>
    </form>
  );
};

export default PersonalityForm;
