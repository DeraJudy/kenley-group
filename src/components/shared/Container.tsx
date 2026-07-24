import { cn } from "@/src/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return (
    <div className={cn("mx-auto w-full max-w-[1080px] px-6", className)}>
      {children}
    </div>
  );
}
