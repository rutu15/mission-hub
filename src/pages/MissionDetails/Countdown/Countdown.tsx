import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Line } from "rc-progress";
import { useNavigate } from "react-router-dom";

import { colors } from "../../../utils/constants";
import "./Countdown.css";
import count from "../../../assets/media/countdown.mp3";
import liftOffVideo from "../../../assets/media/liftup.mp4";

interface Step {
  stepNumber: number;
  stepDescription: string;
}

interface CountdownProps {
  data: Step[];
}

const Countdown = ({ data }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(1);
  const [currentStep, setCurrentStep] = useState<Step | null>(data[0] || null);
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [audioEnded, setAudioEnded] = useState<boolean>(false);
  const [, setIsPlaying] = useState<boolean>(false);
  const [progressbar, setProgressbas] = useState<number>(10);
  const [blink, setBlink] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (showTimer && currentStep) {
      timer = setInterval(() => {
        if (timeLeft > 0) {
          setTimeLeft(timeLeft - 1);
        } else {
          const nextStepNumber = currentStep ? currentStep.stepNumber - 1 : 0;
          const nextStep = data.find(
            (step) => step.stepNumber === nextStepNumber
          );
          setCurrentStep(nextStep || null);
          setProgressbas(progressbar + 10);
          setTimeLeft(1);
          if (!nextStep) {
            clearInterval(timer);
          }
        }
      }, 500);
    }

    return () => clearInterval(timer);
  }, [timeLeft, currentStep, data, showTimer]);

  const handleToggleTimer = () => {
    setShowTimer(!showTimer);
  };
  const handleCountEnded = () => {
    setAudioEnded(true);
  };

  const handleVideoEnded = () => {
    navigate("/");
    toast("Mission Launched Successfully ");
  };

  useEffect(() => {
    setBlink(true);
    const blinkTimeout = setTimeout(() => {
      setBlink(false);
    }, 1000);
    return () => clearTimeout(blinkTimeout);
  }, [currentStep]);

  return (
    <div className="countdown">
      {!showTimer && (
        <button onClick={handleToggleTimer} className="launch-button">
          LAUNCH MISSION
        </button>
      )}

      {showTimer && (
        <>
          {currentStep && (
            <div className="mission-steps">
              <div className="steps-description">
                <h3 className={` step-number ${blink ? "blinking" : ""}`}>
                  {currentStep.stepNumber}
                </h3>
                <p className="step-description">
                  {currentStep.stepDescription}
                </p>
              </div>

              <div className="progress-bar">
                <Line
                  percent={progressbar}
                  strokeWidth={4}
                  strokeColor={colors.missionPlanned}
                />
              </div>
            </div>
          )}
          <div style={{ display: "none" }}>
            <audio controls autoPlay onEnded={handleCountEnded}>
              <source src={count} type="audio/mp3" />
            </audio>
          </div>

          {audioEnded && (
            <video
              width="1500"
              height="340"
              autoPlay
              onPlay={() => setIsPlaying(true)}
              onEnded={() => handleVideoEnded()}
            >
              <source src={liftOffVideo} type="video/mp4" />
            </video>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
