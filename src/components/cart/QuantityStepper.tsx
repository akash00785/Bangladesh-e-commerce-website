"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MAX_ITEM_QUANTITY, MIN_ITEM_QUANTITY } from "@/constants/cart";

interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  productName: string;
}

export default function QuantityStepper({
  value,
  onChange,
  productName,
}: QuantityStepperProps) {
  const canDecrement = value > MIN_ITEM_QUANTITY;
  const canIncrement = value < MAX_ITEM_QUANTITY;

  return (
    <div
      role="group"
      aria-label={`${productName} এর পরিমাণ`}
      className="flex items-center gap-0 rounded-lg border border-border overflow-hidden"
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label={`${productName} এর পরিমাণ কমান`}
        disabled={!canDecrement}
        onClick={() => canDecrement && onChange(value - 1)}
        className="size-8 rounded-none border-0 hover:bg-muted disabled:opacity-40"
      >
        <Minus aria-hidden="true" className="size-3.5" />
      </Button>

      <output
        aria-live="polite"
        aria-atomic="true"
        aria-label={`${productName} এর পরিমাণ: ${value}`}
        className="min-w-8 select-none px-1 text-center text-sm font-semibold text-foreground"
      >
        {value}
      </output>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label={`${productName} এর পরিমাণ বাড়ান`}
        disabled={!canIncrement}
        onClick={() => canIncrement && onChange(value + 1)}
        className="size-8 rounded-none border-0 hover:bg-muted disabled:opacity-40"
      >
        <Plus aria-hidden="true" className="size-3.5" />
      </Button>
    </div>
  );
}
