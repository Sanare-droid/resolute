import { useScrollProgress } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const progress = useScrollProgress();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render on server to prevent hydration mismatches
  if (!isClient) {
    return <div className="scroll-progress" style={{ width: "0%" }} />;
  }

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
};

export default ScrollProgress;
