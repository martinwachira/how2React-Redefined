import React, { useEffect, useState } from "react";

const Blinker = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  const statements = [
    "Hi, let's get started.",
    "This is React Redefined 1. Welcome",
  ];

  // typeWriter --custom
  useEffect(() => {
    if (index === statements.length) return;
    if (
      subIndex === statements[index].length + 1 &&
      index !== statements.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === statements[index].length ? 1000 : 150, parseInt(Math.random() * 350)));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <h2 style={{ color: "white" }}>
      {" "}
      {`${statements[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </h2>
  );
};
export default Blinker;
