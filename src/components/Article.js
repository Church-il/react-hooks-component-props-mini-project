import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Function to generate the minutes to read indicator
  const generateReadTime = (minutes) => {
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const interval = minutes < 30 ? 5 : 10;
    const emojiCount = Math.ceil(minutes / interval);

    return `${emoji.repeat(emojiCount)} ${minutes} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{generateReadTime(minutes)}</p> {/* Display minutes to read */}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
