"use client";

import { useEffect, useState } from "react";
import { getRegistrationCount } from "@/actions/stats";

export function LiveCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getRegistrationCount().then((initialCount) => {
      setCount(initialCount);
    });
    const poller = setInterval(() => {
      getRegistrationCount().then((newCount) => {
        setCount((prev) => Math.max(prev, newCount));
      });
    }, 10000);

    return () => clearInterval(poller);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <span className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
        Live Attendees
      </span>
      <div className="relative flex items-end font-heading text-8xl font-black tracking-tighter sm:text-9xl md:text-[10rem]">
        {/* Digital distortion effect layer could go here */}
        <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-600">
          {count.toLocaleString()}
        </span>
        <div className="absolute right-0 top-0 h-4 w-4 animate-pulse rounded-full bg-red-500" />
      </div>
    </div>
  );
}
