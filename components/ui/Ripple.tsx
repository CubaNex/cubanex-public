"use client";

import React, { useState, useEffect } from "react";

interface RippleProps {
  children: React.ReactElement<any>;
}

export default function Ripple({ children }: RippleProps) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

  const createRipple = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);
  };

  useEffect(() => {
    if (ripples.length === 0) return;
    const timeout = setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 600);
    return () => clearTimeout(timeout);
  }, [ripples]);

  const child = React.Children.only(children);

  return React.cloneElement(child, {
    onClick: (e: React.MouseEvent<HTMLElement>) => {
      createRipple(e);
      if (child.props.onClick) {
        child.props.onClick(e);
      }
    },
    style: {
      ...child.props.style,
      position: "relative",
      overflow: "hidden", // Ensures ripple doesn't overflow
    },
    className: `${child.props.className || ""} relative`,
    children: (
      <>
        {child.props.children}
        <span className="ripple-container">
          {ripples.map((r) => (
            <span
              key={r.id}
              className="ripple-effect"
              style={{
                top: r.y,
                left: r.x,
                width: r.size,
                height: r.size,
              }}
            />
          ))}
        </span>
      </>
    ),
  });
}
