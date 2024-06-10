import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PersonalityQuestion from "../PersonalityQuestion/PersonalityQuestion";
import SectionPoints from "../SectionPoints/SectionPoints";

const PersonalityForm = () => {
  const questions = [
    {
      section: "ekstrawersja (E) lub introwersja (I)",
      questions: [
        {
          question: "Czy lubisz prowadzić rozmowy z nowo poznanymi osobami?",
          options: [
            "Zdecydowanie nie",
            "Raczej nie",
            "Nie wiem",
            "Raczej tak",
            "Zdecydowanie tak",
          ],
        },
        {
          question: "Czy czerpiesz przyjemność z publicznych wystąpień?",
          options: [
            "Zdecydowanie nie",
            "Raczej nie",
            "Nie wiem",
            "Raczej tak",
            "Zdecydowanie tak",
          ],
        },
        {
          question: "Czy preferujesz dużą liczbę aktywności towarzyskich?",
          options: [
            "Zdecydowanie nie",
            "Raczej nie",
            "Nie wiem",
            "Raczej tak",
            "Zdecydowanie tak",
          ],
        },
      ],
    },
    {
      section: "spostrzeganie (S) lub intuicja (N)",
      questions: [
    {
      question: "Czy wolisz mieć konkretne plany i schematy, niż działać spontanicznie?",
      options: [
        "Zdecydowanie nie",
        "Raczej nie",
        "Nie wiem",
        "Raczej tak",
        "Zdecydowanie tak",
      ],
    },
    {
      question: "Czy zwykle zwracasz uwagę na szczegóły?",
      options: [
        "Zdecydowanie nie",
        "Raczej nie",
        "Nie wiem",
        "Raczej tak",
        "Zdecydowanie tak",
      ],
    },
    {
      question: "Czy podejmujesz decyzje kierując się danymi i faktami?",
      options: [
        "Zdecydowanie nie",
        "Raczej nie",
        "Nie wiem",
        "Raczej tak",
        "Zdecydowanie tak",
      ],
    },
  ],
},
{
  section: "myślenie (T) lub uczucia (F)",
  questions: [
    {
      question: "Czy podejmując ważne decyzje, bardziej kierujesz się racjonalnymi analizami i logicznymi argumentami niż emocjami i wartościami?",
      options: [
        "Zdecydowanie nie",
        "Raczej nie",
        "Nie wiem",
        "Raczej tak",
        "Zdecydowanie tak",
      ],
    },
    {
      question: "Czy zazwyczaj stawiasz na rozumne argumenty i skutki?",
      options: [
        "Zdecydowanie nie",
        "Raczej nie",
        "Nie wiem",
        "Raczej tak",
        "Zdecydowanie tak",
      ],
    },
    {
      question: "Czy zazwyczaj unikasz konfliktów i starasz się podejmować decyzje, które zadowolą wszystkich?",
      options: [
        "Zdecydowanie nie",
        "Raczej nie",
        "Nie wiem",
        "Raczej tak",
        "Zdecydowanie tak",
      ],
    },
  ],
},
{
  section: "osąd (J) lub percepcja (P)",
  questions: [
    {
      question: "Czy stawiasz na organizację i terminowość w swoim życiu codziennym?",
      options: [
        "Zdecydowanie nie",
        "Raczej nie",
        "Nie wiem",
        "Raczej tak",
        "Zdecydowanie tak",
      ],
    },
    {
      question: "Czy czujesz się bardziej komfortowo, kiedy masz jasno określony plan dnia lub tygodnia?",
      options: [
        "Zdecydowanie nie",
        "Raczej nie",
        "Nie wiem",
        "Raczej tak",
        "Zdecydowanie tak",
      ],
    },
    {
      question: "Czy preferujesz mieć wszystkie swoje zadania i plany uporządkowane i zaplanowane z wyprzedzeniem?",
      options: [
        "Zdecydowanie nie",
        "Raczej nie",
        "Nie wiem",
        "Raczej tak",
        "Zdecydowanie tak",
      ],
    },
  ],
}
  ];


const pointsMapping = {
  "Zdecydowanie nie": -2,
  "Raczej nie": -1,
  "Nie wiem": 0,
  "Raczej tak": 1,
  "Zdecydowanie tak": 2,
};

const [sectionPoints, setSectionPoints] = useState(Array(questions.length).fill(0));
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(sectionPoints.every(points => points !== 0));
  }, [sectionPoints]);

  const handleOptionChange = (sectionIndex, questionIndex, optionIndex, isChecked) => {
    const newSectionPoints = [...sectionPoints];
    newSectionPoints[sectionIndex] += isChecked ? pointsMapping[questions[sectionIndex].questions[questionIndex].options[optionIndex]] : 0;
    setSectionPoints(newSectionPoints);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      console.log("Musisz odpowiedzieć na wszystkie pytania w każdej sekcji.");
      return;
    }
    navigate("/account", { state: { sectionPoints } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
        {questions.map((section, sIndex) => (
          <div key={sIndex}>
            <h2>{section.section}</h2>
            {section.questions.map((q, qIndex) => (
              <PersonalityQuestion
                key={qIndex}
                question={q.question}
                options={q.options}
                onOptionChange={(optionIndex, isChecked) =>
                  handleOptionChange(sIndex, qIndex, optionIndex, isChecked)
                }
              />
            ))}
            <SectionPoints points={sectionPoints[sIndex]} />
          </div>
        ))}
        {isFormValid && (
          <button type="submit" style={{ fontSize: "45px", padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Wynik
          </button>
        )}
        {!isFormValid && (
          <p style={{ color: "red" }}>Musisz odpowiedzieć na wszystkie pytania w każdej sekcji, aby przesłać formularz.</p>
        )}
      </form>
    </div>
  );
};

export default PersonalityForm;