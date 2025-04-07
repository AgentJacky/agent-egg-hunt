import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export const Questions = (): JSX.Element => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });
  const [showMeeting, setShowMeeting] = useState(false);

  const correctAnswers = {
    q1: "retrieve the package",
    q2: "central station",
    q3: "code alpha",
  };

  const handleAnswerChange = (question: keyof typeof answers, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [question]: value.toLowerCase(),
    }));
  };

  const checkAnswers = () => {
    const allCorrect = Object.keys(correctAnswers).every(
      (q) => answers[q as keyof typeof answers] === correctAnswers[q as keyof typeof correctAnswers]
    );
    
    if (allCorrect) {
      setShowMeeting(true);
    } else {
      alert("One or more answers are incorrect. Please try again.");
    }
  };

  return (
    <main className="bg-[#161a0c] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#161a0c] w-full max-w-[1920px] h-[1080px] relative p-8">
        <h1 className="text-[#ff9e02] text-3xl mb-8 [font-family:'Buenard',Helvetica] font-bold">Security Questions</h1>
        
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="bg-[#26281a] p-6 rounded-lg">
            <h2 className=" [font-family:'Buenard',Helvetica] text-[#ff9e02] text-xl mb-4" >Question 1</h2>
            <p className=" [font-family:'Buenard',Helvetica] text-[#ff9e02] mb-4">What is your mission objective?</p>
            <Input
              className="w-full bg-[#161a0c] text-[#ff9e02] border-[#ff9e02] focus-visible:ring-[#ff9e02]"
              value={answers.q1}
              onChange={(e) => handleAnswerChange("q1", e.target.value)}
              placeholder="Enter your answer"
            />
          </div>

          <div className="bg-[#26281a] p-6 rounded-lg">
            <h2 className="[font-family:'Buenard',Helvetica] text-[#ff9e02] text-xl mb-4">Question 2</h2>
            <p className="[font-family:'Buenard',Helvetica] text-[#ff9e02] mb-4">Where is the target location?</p>
            <Input
              className="w-full bg-[#161a0c] text-[#ff9e02] border-[#ff9e02] focus-visible:ring-[#ff9e02]"
              value={answers.q2}
              onChange={(e) => handleAnswerChange("q2", e.target.value)}
              placeholder="Enter your answer"
            />
          </div>

          <div className="bg-[#26281a] p-6 rounded-lg">
            <h2 className="[font-family:'Buenard',Helvetica] text-[#ff9e02] text-xl mb-4">Question 3</h2>
            <p className="[font-family:'Buenard',Helvetica] text-[#ff9e02] mb-4">What is the extraction protocol?</p>
            <Input
              className="w-full bg-[#161a0c] text-[#ff9e02] border-[#ff9e02] focus-visible:ring-[#ff9e02]"
              value={answers.q3}
              onChange={(e) => handleAnswerChange("q3", e.target.value)}
              placeholder="Enter your answer"
            />
          </div>

          <div className="flex justify-center mt-8">
            <Button
              className="bg-[#ff9e02] text-[#161a0c] hover:bg-[#e08a02] px-8 py-2"
              onClick={checkAnswers}
            >
              Submit Answers
            </Button>
          </div>

          {showMeeting && (
            <div className="bg-[#26281a] p-6 rounded-lg mt-8 text-center animate-fade-in">
              <h2 className="text-[#ff9e02] text-2xl mb-4 [font-family:'Buenard',Helvetica] font-bold">
                Meeting Details
              </h2>
              <p className="text-[#ff9e02] text-xl">
                Date: March 15, 2025
              </p>
              <p className="text-[#ff9e02] text-xl">
                Time: 21:00 hours
              </p>
              <p className="text-[#ff9e02] text-xl">
                Location: Platform 7
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};