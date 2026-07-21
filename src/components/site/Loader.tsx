import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#07111F]"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#0A84FF] to-[#22D3EE] shadow-[0_0_40px_rgba(34,211,238,0.6)]">
                <span className="absolute inset-[3px] rounded-lg bg-[#07111F]" />
                <span className="relative text-sm font-bold tracking-tighter">NX</span>
              </span>
              <span className="text-xl font-semibold tracking-tight">
                Nexora<span className="text-[#22D3EE]">.</span>
              </span>
            </motion.div>
            <div className="mt-6 h-[2px] w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-[#22D3EE] to-transparent"
              />
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Innovate • Integrate • Elevate
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setP(scrolled * 100);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        style={{ width: `${p}%` }}
        className="h-full bg-gradient-to-r from-[#0A84FF] via-[#22D3EE] to-[#4CC9F0] transition-[width] duration-150"
      />
    </div>
  );
}
