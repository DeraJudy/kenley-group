export function LiveIndicator() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--green-pale)]" />

      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--green-pale)]" />
    </span>
  );
}
