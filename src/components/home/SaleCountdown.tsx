"use client";

import { useEffect, useState } from "react";

interface CountdownValue {
  hours: string;
  minutes: string;
  seconds: string;
}

const INITIAL_COUNTDOWN: CountdownValue = {
  hours: "০৮",
  minutes: "৪৫",
  seconds: "৩২",
};

const BENGALI_DIGITS = "০১২৩৪৫৬৭৮৯";

function toBengaliDigits(value: number) {
  return String(value)
    .padStart(2, "0")
    .replace(/\d/g, (digit) => BENGALI_DIGITS[Number(digit)]);
}

function getCountdown(totalSeconds: number): CountdownValue {
  const safeSeconds = Math.max(totalSeconds, 0);
  const hours = Math.floor(safeSeconds / 3600);
  const minutes = Math.floor((safeSeconds % 3600) / 60);
  const seconds = safeSeconds % 60;

  return {
    hours: toBengaliDigits(hours),
    minutes: toBengaliDigits(minutes),
    seconds: toBengaliDigits(seconds),
  };
}

export default function SaleCountdown() {
  const [remainingSeconds, setRemainingSeconds] = useState(8 * 3600 + 45 * 60 + 32);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemainingSeconds((value) => (value > 0 ? value - 1 : 8 * 3600 + 45 * 60 + 32));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdown =
    remainingSeconds === 8 * 3600 + 45 * 60 + 32
      ? INITIAL_COUNTDOWN
      : getCountdown(remainingSeconds);

  return (
    <div
      className="flex items-center gap-1.5 sm:gap-2"
      aria-label={`ফ্ল্যাশ সেল শেষ হতে বাকি ${countdown.hours} ঘণ্টা ${countdown.minutes} মিনিট ${countdown.seconds} সেকেন্ড`}
    >
      {[
        { label: "ঘণ্টা", value: countdown.hours },
        { label: "মিনিট", value: countdown.minutes },
        { label: "সেকেন্ড", value: countdown.seconds },
      ].map((item, index) => (
        <div className="flex items-center gap-1.5 sm:gap-2" key={item.label}>
          <div className="min-w-11 rounded-lg bg-sale-foreground/15 px-2 py-1.5 text-center sm:min-w-14 sm:px-2.5 sm:py-2">
            <span className="block text-base font-extrabold leading-none sm:text-lg">
              {item.value}
            </span>
            <span className="mt-1 block text-[9px] font-medium opacity-80 sm:text-[10px]">
              {item.label}
            </span>
          </div>
          {index < 2 && <span className="text-lg font-bold opacity-70">:</span>}
        </div>
      ))}
    </div>
  );
}