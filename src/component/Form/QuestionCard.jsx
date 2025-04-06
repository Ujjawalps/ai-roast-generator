// src/component/Form/QuestionCard.jsx
import React from "react";
import { motion } from "framer-motion";

const QuestionCard = ({ question, value, onChange, onNext, onSkip }) => {
  const renderInput = () => {
    if (question.type === "select") {
      return (
        <select
          aria-label={question.label}
          value={value || ""}
          onChange={(e) => onChange(question.id, e.target.value)}
          className="w-full mt-3 p-2 rounded-xl bg-gray-800 text-white border border-gray-600"
        >
          <option value="" disabled>
            -- Select an option --
          </option>
          {question.options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    }

    return (
      <input
        type={question.type}
        placeholder="Type your response..."
        value={value || ""}
        onChange={(e) => onChange(question.id, e.target.value)}
        aria-label={question.label}
        className="w-full mt-3 p-3 rounded-xl bg-gray-800 text-white border border-gray-600 placeholder:text-gray-400"
      />
    );
  };

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
      className="relative bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl rounded-2xl p-6 w-full max-w-md mx-auto text-white"
    >
      {/* Question Title */}
      <h2 className="text-xl font-semibold mb-4 text-center">
        🤖 {question.label}
      </h2>

      {/* Render Field */}
      {renderInput()}

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between gap-4">
        <button
          onClick={onSkip}
          className="text-sm px-4 py-2 rounded-xl border border-gray-500 hover:bg-white hover:text-black transition"
        >
          Prefer not to say
        </button>
        <button
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold shadow hover:shadow-lg transition-all"
        >
          Next →
        </button>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
