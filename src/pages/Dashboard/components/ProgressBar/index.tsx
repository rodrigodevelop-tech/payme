import { useEffect, useState } from "react";
import { ProgressBarContainer, ProgressBarIndicator } from "./styles";

export default function ProgressBar() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ProgressBarContainer value={66}>
      <ProgressBarIndicator
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </ProgressBarContainer>
  );
}
