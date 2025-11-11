import { Button } from "../ui/Button.jsx";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils.js";


export const Conversation = ({ className, children }) => {
  const scrollRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(true);

  const checkIfAtBottom = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      setIsAtBottom(scrollHeight - scrollTop - clientHeight < 50);
    }
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const div = scrollRef.current;
    if (div) {
      div.addEventListener('scroll', checkIfAtBottom);
      return () => div.removeEventListener('scroll', checkIfAtBottom);
    }
  }, []);

  return (
    <div className="relative flex-1 flex flex-col">
      <div
        ref={scrollRef}
        className={cn('flex-1 overflow-y-auto', className)}
        role="log"
      >
        {children}
      </div>
      {!isAtBottom && (
        <Button
          className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full shadow-lg"
          onClick={scrollToBottom}
          size="icon"
          type="button"
          variant="outline"
        >
          <ArrowDown className="size-4" />
        </Button>
      )}
    </div>
  );
};

export const ConversationContent = ({ className, children }) => (
  <div className={cn('p-4 space-y-4', className)}>
    {children}
  </div>
);