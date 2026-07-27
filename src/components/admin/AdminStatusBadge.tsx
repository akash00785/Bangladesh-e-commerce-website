import type { AdminStatusTone } from "@/types/admin";
import { cn } from "@/lib/utils";

const TONE_CLASSES: Record<AdminStatusTone, string> = {
  brand: "bg-brand/10 text-brand",
  sale: "bg-sale/10 text-sale",
  muted: "bg-muted text-muted-foreground",
  destructive: "bg-destructive/10 text-destructive",
};

interface AdminStatusBadgeProps {
  label: string;
  tone: AdminStatusTone;
  className?: string;
}

export default function AdminStatusBadge({
  label,
  tone,
  className,
}: AdminStatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
        TONE_CLASSES[tone],
        className
      )}
    >
      {label}
    </span>
  );
}
