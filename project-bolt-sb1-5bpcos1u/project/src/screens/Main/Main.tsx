import { LockOpenIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export const Main = (): JSX.Element => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (code === "424054") {
      navigate("/questions");
    } else {
      alert("Invalid code. Please try again.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <main className="bg-[#161a0c] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#161a0c] w-full max-w-[1920px] h-[1080px] relative">
        <h1 className="absolute w-[286px] top-[53px] left-1/2 -translate-x-1/2 [font-family:'Buenard',Helvetica] font-bold text-[#ff9e02] text-[33px] tracking-[0] leading-normal text-center">
          Welcome, Agent Kel
        </h1>

        <h2 className="absolute w-[263px] top-[467px] left-1/2 -translate-x-1/2 [font-family:'CustomFont'] font-normal text-[#ff9e02] text-[33px] tracking-[0] leading-normal text-center">
          Enter the code
        </h2>

        <img
          className="w-[169px] h-[180px] top-0 absolute left-0 object-cover"
          alt="Decorative flower top left"
          src="/flower2-1.png"
        />

        <img
          className="w-[249px] h-[283px] top-[797px] absolute right-0 object-cover"
          alt="Decorative flower bottom right"
          src="/flower2-3.png"
        />

        <div className="absolute w-[476px] h-[35px] top-[526px] left-1/2 -translate-x-1/2">
          <Input
            className="w-full h-full bg-[#26281a] rounded-[15px] border-none text-[#ff9e02] focus-visible:ring-[#ff9e02] focus-visible:ring-offset-0"
            type="password"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyPress={handleKeyPress}
            aria-label="Enter security code"
          />
        </div>

        <div className="absolute w-[190px] h-[37px] top-[579px] left-1/2 -translate-x-1/2">
          <Button
            className="relative w-full h-full rounded-[15px] overflow-hidden border-none shadow-[0_0_15px_rgba(255,158,2,0.5)] hover:shadow-[0_0_20px_rgba(255,158,2,0.7)] transition-shadow duration-300"
            variant="outline"
            onClick={handleSubmit}
          >
            <div className="absolute inset-0 rounded-[20px] [background:linear-gradient(180deg,rgba(251,215,137,1)_0%,rgba(255,158,15,1)_100%)]" />
            <div className="absolute inset-0 rounded-[15px] blur-[2px] [background:linear-gradient(180deg,rgba(255,158,2,0.5)_0%,rgba(231,80,19,0.5)_100%)]" />
            <LockOpenIcon className="relative w-6 h-[27px] text-[#161a0c]" />
          </Button>
        </div>
      </div>
    </main>
  );
};