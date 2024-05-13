import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const pickRandom = [
  "Mars Transit Phase: Milestone Achieved",
  "Next event going to occur on monday",
  "Mission status has changed from planned to scheduled",
  "Saturn successfully launched",
];

const DynamicContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setInterval(() => {
      toast(pickRandom[currentIndex]);
      setCurrentIndex((prevIndex) =>
        prevIndex === pickRandom.length - 1 ? 0 : prevIndex + 1
      );
    }, 100000);

    return () => clearInterval(timeout);
  }, [currentIndex]);

  return <></>;
};

export default DynamicContent;
