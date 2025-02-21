import React, { ReactNode, useState } from "react";

interface ExpandableTextProps {
  maxChars: number;
  children: string;
}

const ExpandableText = ({ maxChars, children }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars) + "...";

  return (
    <div>
      <p>
        {text}
        <button
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "less" : "more"}
        </button>
      </p>
    </div>
  );
};

export default ExpandableText;
