import { cn } from "@/src/lib/utils";

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ badge, title, subtitle, className }: Props) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {badge && (
        <span className="inline-flex rounded-full border bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-5xl font-black tracking-tight">{title}</h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-slate-600">{subtitle}</p>
      )}
    </div>
  );
}
