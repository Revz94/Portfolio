"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { profile } from "@/lib/data";

const links = ["about", "experience", "projects", "skills", "certifications", "contact"];

export default function Nav() {
  const [active, setActive] = useState("");
  const [dark, setDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-lg dark:border-white/10 dark:bg-[#070f1f]/70">
      <motion.div style={{ scaleX }} className="absolute inset-x-0 top-0 h-0.5 origin-left bg-brand" />
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-bold text-navy dark:text-white">{profile.name}</a>
        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} aria-current={active === l ? "true" : undefined}
                className={`text-sm font-medium capitalize transition hover:text-brand ${active === l ? "text-brand" : "text-slate-600 dark:text-slate-400"}`}>{l}</a>
            </li>
          ))}
        </ul>
        <button onClick={toggle} aria-label="Toggle dark mode" className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-white/10">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
}
