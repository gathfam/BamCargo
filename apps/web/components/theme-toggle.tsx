"use client";

import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom"; // Import flushSync
// import * as Switch from "@radix-ui/react-switch";
import { Sun, Moon } from "lucide-react";
import { Switch } from "radix-ui";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Gunakan HTMLButtonElement karena Switch.Thumb ada di dalam Switch.Root (Button)
  const ref = useRef<HTMLButtonElement>(null);

  // Sync state awal dengan localStorage/system (Opsional, good practice)
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = async (checked: boolean) => {
    // 1. Fallback jika browser tidak support View Transition
    if (!document.startViewTransition || !ref.current) {
      setIsDarkMode(checked);
      toggleHtmlClass(checked);
      return;
    }

    // 2. Ambil posisi tombol (Titik pusat ledakan)
    const rect = ref.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // 3. Hitung radius sampai ujung layar terjauh
    const right = window.innerWidth - x;
    const bottom = window.innerHeight - y;
    const maxRadius = Math.hypot(Math.max(x, right), Math.max(y, bottom));

    // 4. Mulai Transisi
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode(checked);
        toggleHtmlClass(checked);
      });
    });

    await transition.ready;

    // 5. Animasikan CLIP PATH pada layer BARU (::view-transition-new)
    // Logika: Layer baru selalu muncul menutupi layer lama
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`, // Mulai dari 0px (titik)
          `circle(${maxRadius}px at ${x}px ${y}px)`, // Membesar sampai full screen
        ],
      },
      {
        duration: 500,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)", // Targetkan layer BARU
      },
    );
  };

  // Helper function agar sync lebih rapi
  const toggleHtmlClass = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <Switch.Root
      checked={isDarkMode}
      onCheckedChange={toggleDarkMode}
      //   className="w-[42px] h-[25px] bg-slate-200 dark:bg-slate-700 rounded-full relative shadow-inner"
    >
      <Switch.Thumb
        ref={ref}
        // className="block w-[21px] h-[21px] bg-white rounded-full shadow transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px] flex items-center justify-center"
      >
        {isDarkMode ? <Moon size={14} /> : <Sun size={14} />}
      </Switch.Thumb>
    </Switch.Root>
  );
}
