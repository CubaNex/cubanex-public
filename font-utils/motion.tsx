import { Variants, Transition } from "framer-motion";

// Generic slideIn
export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  type: "tween" | "spring" | "keyframes" | "inertia",
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    } as Transition,
  },
});

// Stagger container
export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    } as Transition,
  },
});

// Text variants
const createTextVariant = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeIn", delay } as Transition,
  },
});

export const textVariant2 = createTextVariant(0);
export const textVariant3 = createTextVariant(0.2);
export const textVariant3_5 = createTextVariant(0.3);
export const textVariant4 = createTextVariant(0.6);

// Fade in
export const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: "tween" | "spring" | "keyframes" | "inertia",
  delay: number,
  duration: number
): Variants => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { type, delay, duration, ease: "easeOut" } as Transition,
  },
});

// Zoom in
export const zoomIn = (delay: number, duration: number): Variants => ({
  hidden: { scale: 0, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    } as Transition,
  },
});
