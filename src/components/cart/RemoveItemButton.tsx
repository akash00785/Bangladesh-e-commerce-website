"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RemoveItemButtonProps {
  productName: string;
  onRemove: () => void;
}

export default function RemoveItemButton({
  productName,
  onRemove,
}: RemoveItemButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={`${productName} কার্ট থেকে সরান`}
      onClick={onRemove}
      className="size-8 shrink-0 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
    >
      <Trash2 aria-hidden="true" className="size-4" />
    </Button>
  );
}
