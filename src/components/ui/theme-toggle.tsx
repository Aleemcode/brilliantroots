"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const themes = [
  { id: "navy", color: "#001F51", label: "Midnight" },
  { id: "blue", color: "#3B86FE", label: "River" },
  { id: "green", color: "#1BC67F", label: "Forest" },
  { id: "orange", color: "#FB5707", label: "Terracotta" },
  { id: "gold", color: "#FFCB66", label: "Gold" },
];

const themeChangeEvent = "br-theme-change";

function subscribeToTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(themeChangeEvent, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(themeChangeEvent, callback);
  };
}

function getThemeSnapshot() {
  return localStorage.getItem("br-theme") || "navy";
}

function getModeSnapshot() {
  return localStorage.getItem("br-mode") || "light";
}

function getDefaultTheme() {
  return "navy";
}

function getDefaultMode() {
  return "light";
}

export function ThemeToggle() {
  const activeTheme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getDefaultTheme
  );
  const activeMode = useSyncExternalStore(
    subscribeToTheme,
    getModeSnapshot,
    getDefaultMode
  );
  const isDark = activeMode === "dark";
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", activeTheme);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeTheme, isDark]);

  const handleThemeChange = (themeId: string) => {
    localStorage.setItem("br-theme", themeId);
    window.dispatchEvent(new Event(themeChangeEvent));
    document.documentElement.setAttribute("data-theme", themeId);
    setIsOpen(false);
  };

  const toggleDarkMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextMode = isDark ? "light" : "dark";
    localStorage.setItem("br-mode", nextMode);
    window.dispatchEvent(new Event(themeChangeEvent));
    if (nextMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const activeColor = themes.find(t => t.id === activeTheme)?.color;
  const inactiveThemes = themes.filter(t => t.id !== activeTheme);

  return (
    <div className="relative flex items-center h-10" ref={containerRef}>
      <motion.div
        layout
        className={cn(
          "flex items-center bg-br-card border shadow-soft transition-colors duration-300",
          isOpen ? "border-br-border rounded-full px-1" : "border-transparent rounded-full"
        )}
        style={{ height: isOpen ? 40 : 40 }}
      >
        {/* Active Toggle / Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Theme Options"
          className="relative w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-transform"
        >
          {/* Outer ring */}
          <motion.div 
            layoutId="active-ring"
            className="absolute inset-0 rounded-full border m-[3px]"
            style={{ borderColor: activeColor, opacity: 0.6 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
          {/* Inner circle */}
          <div 
            className="w-[18px] h-[18px] rounded-full transition-colors duration-300"
            style={{ backgroundColor: isDark ? 'transparent' : activeColor, border: isDark ? `2px solid ${activeColor}` : 'none' }}
          />
        </button>

        {/* Expanded Options */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center overflow-hidden whitespace-nowrap pl-1 pr-3 gap-3.5"
            >
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="w-[18px] h-[18px] flex items-center justify-center text-br-muted hover:text-br-text transition-colors ml-1"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              <div className="w-px h-4 bg-br-border" />

              {/* Other Colors */}
              {inactiveThemes.map(theme => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeChange(theme.id)}
                  aria-label={`Switch to ${theme.label} theme`}
                  className="w-[18px] h-[18px] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <div 
                    className="w-[18px] h-[18px] rounded-full"
                    style={{ backgroundColor: theme.color }}
                  />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
