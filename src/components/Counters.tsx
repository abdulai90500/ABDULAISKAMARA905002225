"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: "fas fa-check-circle", number: 30, label: "Works Completed" },
  { icon: "fas fa-calendar-alt", number: 3, label: "Years of Experience" },
  { icon: "fas fa-users", number: 30, label: "Total Clients" },
  { icon: "fas fa-award", number: 10, label: "Awards Won" },
];

function useCounter(target: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 25);
    return () => clearInterval(timer);
  }, [active, target]);
  return count;
}

function CounterCard({ icon, number, label }: { icon: string; number: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const count = useCounter(number, active);
  return (
    <div className="counter-card" ref={ref}>
      <div className="counter-icon"><i className={icon} /></div>
      <div className="counter-number">{count}+</div>
      <div className="counter-label">{label}</div>
    </div>
  );
}

export default function Counters() {
  return (
    <div className="counters">
      <div className="container">
        <div className="counters-grid">
          {stats.map((s) => <CounterCard key={s.label} {...s} />)}
        </div>
      </div>
    </div>
  );
}
