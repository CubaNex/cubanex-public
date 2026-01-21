"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
    delay?: number;
    duration?: number;
    yOffset?: number;
    once?: boolean;
}

const ScrollReveal = ({
    children,
    width = "100%",
    className = "",
    delay = 0.2,
    duration = 0.5,
    yOffset = 50,
    once = true,
}: ScrollRevealProps) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once }}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
