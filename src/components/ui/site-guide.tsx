"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Map our generated poses to distinct interaction states
const POSES = {
  waving: "/guide-poses/guide_pose_waving_1777588966929.png",
  pointing_right: "/guide-poses/guide_pose_pointing_right_1777588979206.png",
  pointing_left: "/guide-poses/guide_pose_pointing_left_1777589018178.png",
  pointing_up: "/guide-poses/guide_pose_pointing_up_1777588956957.png",
  reading: "/guide-poses/guide_pose_reading_1777588992696.png",
  thinking: "/guide-poses/guide_pose_thinking_1777589005967.png",
} as const;

type PoseType = keyof typeof POSES;

export function SiteGuide() {
  const [currentPose, setCurrentPose] = useState<PoseType>("waving");
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Initial delay before the guide pops up to greet the user
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const handleScroll = () => {
      if (isHovered) return; // Don't interrupt if user is interacting with it

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = scrollY / (documentHeight - windowHeight);

      // Define zones for different poses
      if (scrollPercentage < 0.1) {
        setCurrentPose("waving"); // Top of page: greeting
      } else if (scrollPercentage > 0.1 && scrollPercentage < 0.3) {
        setCurrentPose("pointing_right"); // Looking at grid
      } else if (scrollPercentage >= 0.3 && scrollPercentage < 0.6) {
        setCurrentPose("reading"); // Deep in methodology/learning sections
      } else if (scrollPercentage >= 0.6 && scrollPercentage < 0.9) {
        setCurrentPose("thinking"); // Pondering the journey
      } else {
        setCurrentPose("pointing_up"); // Bottom of page: pointing back up or to footer links
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(showTimer);
    };
  }, [isHovered]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 150, opacity: 0, rotate: 10 }}
      animate={{ y: 0, opacity: 1, rotate: 0 }}
      exit={{ y: 150, opacity: 0, rotate: -10 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 cursor-pointer pointer-events-auto"
      onMouseEnter={() => {
        setIsHovered(true);
        setCurrentPose("pointing_left"); // Points to the content they are probably looking at
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className="relative group">
        {/* Tooltip bubble that shows on hover */}
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10, scale: isHovered ? 1 : 0.9 }}
          className="absolute -top-16 right-0 w-max bg-br-primary-dark text-white text-xs font-medium py-2 px-4 rounded-xl shadow-card pointer-events-none"
        >
          Back to top
          {/* Bubble tail */}
          <svg className="absolute text-br-primary-dark h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
          </svg>
        </motion.div>

        {/* The Character Image */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 drop-shadow-soft overflow-visible">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPose}
              initial={{ opacity: 0, scale: 0.9, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -10 }}
              transition={{ duration: 0.15 }}
              className="absolute inset-0"
            >
              <Image
                src={POSES[currentPose]}
                alt={`Site Guide - ${currentPose}`}
                fill
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
