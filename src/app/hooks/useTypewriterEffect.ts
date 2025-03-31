import { useState, useEffect } from 'react';

interface TypewriterOptions {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayAfterTyping?: number;
}

const useTypewriterEffect = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterTyping = 2000
}: TypewriterOptions) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // If we're not deleting, we're typing
    if (!isDeleting) {
      // If the displayed text is shorter than the current text, add a character
      if (displayText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].substring(0, displayText.length + 1));
        }, typingSpeed);
      } 
      // If we've finished typing, wait before starting to delete
      else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayAfterTyping);
      }
    } 
    // If we're deleting
    else {
      // If there's still text to delete
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } 
      // If we've deleted everything, move to the next text
      else {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, delayAfterTyping]);

  return { displayText };
};

export default useTypewriterEffect; 