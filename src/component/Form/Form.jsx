// src/component/Form/Form.jsx
import React, { useState } from "react";
import { initialGroup, remainingQuestions } from "./questions";
import QuestionCard from "./QuestionCard";
import Lottie from "lottie-react";
import avatar from "../../assets/avatar.json";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(-1); // -1 = intro page, 0+ = individual questions
  const navigate = useNavigate();

  // Handle field changes
  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Move to next question
  const handleNext = () => {
    if (currentStep < remainingQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // All questions answered
      navigate("/result", { state: formData });
    }
  };

  // Handle skip logic
  const handleSkip = () => {
    const skippedQuestion = remainingQuestions[currentStep];
    handleChange(skippedQuestion.id, "Prefer not to say");
    handleNext();
  };

  // Initial grouped question screen
  const renderInitialGroup = () => (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl p-6 w-full max-w-md mx-auto text-white space-y-5">
      <h2 className="text-xl font-semibold text-center">👋 Let's Get Started</h2>

      {initialGroup.map((question) => (
        <div key={question.id}>
          <label className="block mb-1">{question.label}</label>
          {question.type === "select" ? (
            <select
              value={formData[question.id] || ""}
              onChange={(e) => handleChange(question.id, e.target.value)}
              className="w-full p-2 rounded-xl bg-gray-800 text-white border border-gray-600"
            >
              <option value="">-- Select --</option>
              {question.options.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={question.type}
              placeholder="Type here..."
              value={formData[question.id] || ""}
              onChange={(e) => handleChange(question.id, e.target.value)}
              className="w-full p-2 rounded-xl bg-gray-800 text-white border border-gray-600 placeholder:text-gray-400"
            />
          )}
        </div>
      ))}

      <button
        onClick={() => setCurrentStep(0)}
        className="bg-blue-600 w-full mt-4 py-2 rounded-xl hover:bg-blue-700 transition-all font-semibold"
      >
        Start Roast Journey →
      </button>
    </div>
  );

  const currentQuestion = remainingQuestions[currentStep];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Lottie Avatar */}
      <div className="w-40 mb-[-40px] z-10 pointer-events-none select-none">
        <Lottie animationData={avatar} loop autoplay />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md mt-[-20px] z-0">
        {currentStep === -1 ? (
          renderInitialGroup()
        ) : (
          <QuestionCard
            question={currentQuestion}
            value={formData[currentQuestion.id]}
            onChange={handleChange}
            onNext={handleNext}
            onSkip={handleSkip}
          />
        )}
      </div>
    </div>
  );
};

export default Form;
