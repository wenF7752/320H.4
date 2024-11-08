import { useState } from "react";
import Button from "./Button";

function PlayButton({ movieName }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayClick() {
    setIsPlaying(!isPlaying);
  }

  return (
    <Button onClick={handlePlayClick} className={isPlaying && "playing"}>
      {isPlaying ? "Stop Playing" : "Play"} "{movieName}"
    </Button>
  );
}

export default PlayButton;
