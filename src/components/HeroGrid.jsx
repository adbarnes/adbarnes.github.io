import React, { useMemo } from "react";
import { motion } from "framer-motion";
import "./HeroGrid.css";

// Define your shape mappings here
const variantShapes = {
  stars: {
    default: "square",
    special: "star",
  },
  diamonds: {
    default: "square",
    special: "diamond",
  },
  circle: {
    default: "square",
    special: "circle",
  },
  triangles: {
    default: "circle",
    special: "star",
  },
  squares: {
    default: "square",
    special: "square",
  },
  rotatedsquares: {
    default: "square",
    special: "diamond",
  },
  crosses: {
    default: "square",
    special: "cross",
  },
  checks: {
    default: "square",
    special: "check",
  },
  // fallback
  default: {
    default: "square",
    special: "circle",
  },
};

const HeroGrid = ({ variant = "default" }) => {
  const total = 50;
  const specialIndex = useMemo(() => Math.floor(Math.random() * total), []);
  const gridItems = Array.from({ length: total });

  // Use the shapes mapping based on variant.
  const shapes = variantShapes[variant] || variantShapes.default;

  return (
    <div className={`grid-container is-hidden-touch ${variant}`}>
      {gridItems.map((_, i) => {
        const shapeClass = i === specialIndex ? shapes.special : shapes.default;

        return (
          <motion.div
            key={i}
            className={`grid-item ${shapeClass}`}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: 0,
              duration: 2 + Math.random() * 2,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default HeroGrid;
