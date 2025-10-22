import type { ElementType } from 'react';
import { useEffect, useRef, useState, createElement, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import "../../bubble.css"

interface TextTypeProps {
  className?: string;
  lineClassName?: string;
  showCursor?: boolean;
  cursorCharacter?: string | React.ReactNode;
  cursorBlinkDuration?: number;
  cursorClassName?: string;
  text: string | string[];
  as?: ElementType;
  typingSpeed?: number;
  initialDelay?: number;
  pauseBetweenLines?: number;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onLineComplete?: (line: string, index: number) => void;
  onAllComplete?: () => void;
  startOnVisible?: boolean;
}

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 45,
  initialDelay = 0,
  pauseBetweenLines = 800,
  className = '',
  lineClassName = '',
  showCursor = true,
  cursorCharacter = '',
  cursorClassName = '',
  cursorBlinkDuration = 0.3,
  textColors = [],
  variableSpeed,
  onLineComplete,
  onAllComplete,
  startOnVisible = false,
  ...props
}: TextTypeProps & React.HTMLAttributes<HTMLElement>) => {
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [currentLineText, setCurrentLineText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [isTypingBubbleAnimating, setIsTypingBubbleAnimating] = useState(false);
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLElement | null>(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getLineColor = (lineIndex: number) => {
    if (textColors.length === 0) return undefined;
    return textColors[lineIndex % textColors.length];
  };

  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setIsTypingBubbleAnimating(true);
            setTimeout(() => setIsTypingBubbleAnimating(false), 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!startOnVisible) {
      setIsTypingBubbleAnimating(true);
      setTimeout(() => setIsTypingBubbleAnimating(false), 200);
    }
  }, [startOnVisible]);

  useEffect(() => {
    if (!isVisible || isComplete) return;

    let timeout: ReturnType<typeof setTimeout>;

    const currentLine = textArray[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      // Still typing current line
      timeout = setTimeout(
        () => {
          setCurrentLineText(prev => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        },
        currentCharIndex === 0 && currentLineIndex === 0 
          ? initialDelay 
          : (variableSpeed ? getRandomSpeed() : typingSpeed)
      );
    } else {
      // Finished typing current line
      timeout = setTimeout(() => {
        // Move current line to completed lines
        setCompletedLines(prev => [...prev, currentLineText]);
        
        // Fire callback
        if (onLineComplete) {
          onLineComplete(currentLineText, currentLineIndex);
        }

        // Check if there are more lines
        if (currentLineIndex < textArray.length - 1) {
          // Start animation for new typing bubble
          setIsTypingBubbleAnimating(true);
          setTimeout(() => setIsTypingBubbleAnimating(false), 200);
          
          // Move to next line
          setCurrentLineIndex(prev => prev + 1);
          setCurrentLineText('');
          setCurrentCharIndex(0);
        } else {
          // All lines complete
          setIsComplete(true);
          if (onAllComplete) {
            onAllComplete();
          }
        }
      }, pauseBetweenLines);
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    currentLineText,
    currentLineIndex,
    isComplete,
    isVisible,
    textArray,
    typingSpeed,
    initialDelay,
    pauseBetweenLines,
    variableSpeed,
    getRandomSpeed,
    onLineComplete,
    onAllComplete
  ]);

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `${className}`,
      ...props
    },
    <>
      {completedLines.map((line, index) => (
        <div key={index} className="bubble say">
          <div className="bubble-content">
            <div
              className={`whitespace-pre-wrap ${lineClassName}`}
              style={textColors.length > 0 ? { color: getLineColor(index) } : undefined}
            >
              {line}
            </div>
          </div>
        </div>
      ))}
      {!isComplete && (
        <div className={`bubble say ${isTypingBubbleAnimating ? 'imagine' : ''}`}>
          <div className="bubble-content">
            <div className={`whitespace-pre-wrap ${lineClassName}`}>
              <span style={textColors.length > 0 ? { color: getLineColor(currentLineIndex) } : undefined}>
                {currentLineText}
              </span>
              {showCursor && (
                <span
                  ref={cursorRef}
                  className={`ml-1 inline-block opacity-100 ${cursorClassName}`}
                >
                  {cursorCharacter}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TextType;
