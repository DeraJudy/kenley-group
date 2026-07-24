import { cn } from "@/src/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: Props) {
  return (
    <section
      id={id}
      className={cn("border-b border-[var(--line)] py-24", className)}
    >
      {children}
    </section>
  );
}
