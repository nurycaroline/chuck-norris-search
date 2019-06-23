import React from 'react';

const highlightText = (text, highlight) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return parts.map((part, i) => (part.toLowerCase() === highlight.toLowerCase() ? (
    <span key={i} style={{ fontWeight: 'bold', color: 'red' }}>
      {part}
    </span>
  ) : (
    part
  )));
};

export default highlightText;
