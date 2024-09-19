"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <CountUp prefix="$" decimal="." duration={2.75} decimals={2} end={amount} />
  );
};

export default AnimatedCounter;
