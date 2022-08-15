import { useEffect, useState } from "react";
import { ProgressBarContainer, ProgressBarIndicator } from "./styles";

interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProgressBarContainer value={value}>
      <ProgressBarIndicator
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </ProgressBarContainer>
  );
}
