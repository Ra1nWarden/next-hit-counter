"use client";
import React from "react";

export function NumberButton({ num }) {
  const [isCensored, setIsCensored] = React.useState(true);
  return (
    <button
      className={isCensored ? "censored" : ""}
      onClick={() => setIsCensored(!isCensored)}
    >
      {num}
    </button>
  );
}
