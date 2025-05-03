import { useState, useEffect, useRef } from "react";

const phrases = [
  "A Frontend Developer",
  "A Web Developer",
  "A Full Stack Developer",
  "A UI/UX Designer",
];
const chars = "!<>-_\\/[]%#^#@%$^#@%^^%&%{}—=+*^?#"; // Characters for scrambling

const TextScramble = () => {
  const [text, setText] = useState("");
  const frameRequest = useRef<number | null>(null);
  const frame = useRef(0);
  // Store only the target characters in the queue
  // Removed duplicate declaration of queue
  const resolveRef = useRef<(() => void) | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref for setTimeout

  // Simplified setTextAsync for sequential reveal
  const setTextAsync = (newText: string) => {
    const length = newText.length;
    const promise = new Promise<void>((resolve) => (resolveRef.current = resolve));
    queue.current = [];

    for (let i = 0; i < length; i++) {
      queue.current.push({ to: newText[i] }); // Only store the target character
    }

    if (frameRequest.current !== null) {
      cancelAnimationFrame(frameRequest.current);
    }
    frame.current = 0;
    update(); // Start the animation
    return promise;
  };

  const update = () => {
    let output = "";
    const length = queue.current.length;
    const framesPerChar = 6; // Speed of revealing correct characters
    
    // --- Control scramble speed ---
    const framesPerScrambleUpdate = 3; // Higher = Slower flipping, Lower = Faster flipping
    // -----------------------------

    const revealCount = Math.min(Math.floor(frame.current / framesPerChar), length);
    const isComplete = revealCount === length;

    for (let i = 0; i < length; i++) {
      if (i < revealCount) {
        output += queue.current[i].to;
      } else {
        // Only update scramble char every few frames
        if (frame.current % framesPerScrambleUpdate === 0) {
          const randomChar = chars[Math.floor(Math.random() * chars.length)];
          // Temporarily store the chosen char to display until next update interval
          // (We need a way to persist this between frames, let's refine this)
          // For simplicity now, we just generate it conditionally
           output += `<span class="opacity-50">${randomChar}</span>`;
        } else {
           // Re-use the previous frame's character appearance if possible
           // This requires storing the last scramble char, let's simplify for now:
           // We'll just show *something* consistent or re-randomize less often.
           // A simple approach: just show the last known character or a placeholder.
           // Let's stick to conditional generation for now, but be aware it might flicker.
           // A better approach involves storing the last random char per position.

           // Refined approach: Store last random char in queue item
           if (!queue.current[i].lastScrambleChar || frame.current % framesPerScrambleUpdate === 0) {
             queue.current[i].lastScrambleChar = chars[Math.floor(Math.random() * chars.length)];
           }
           output += `<span class="opacity-50">${queue.current[i].lastScrambleChar}</span>`;
        }
      }
    }
    setText(output);

    if (isComplete) {
      resolveRef.current?.();
    } else {
      frameRequest.current = requestAnimationFrame(update);
      frame.current++;
    }
  };

  // --- Add lastScrambleChar to queue type ---
  const queue = useRef<{ to: string; lastScrambleChar?: string }[]>([]);
  // -----------------------------------------
  useEffect(() => {
    let counter = 0;
    const next = () => {
      setTextAsync(phrases[counter]).then(() => {
        // Schedule the next phrase reveal after a pause
        timeoutRef.current = setTimeout(next, 2000); // Pause for 2 seconds
      });
      counter = (counter + 1) % phrases.length;
    };
    next(); // Start the cycle

    // Cleanup function on component unmount
    return () => {
      if (frameRequest.current !== null) {
        cancelAnimationFrame(frameRequest.current);
      }
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current); // Clear pending timeout
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <p
      className="text-2xl pt-3 text-brand-orange text-center min-h-[2em]" // min-h prevents layout shifts
      dangerouslySetInnerHTML={{ __html: text }} // Render the HTML output
    />
  );
};

export default TextScramble;