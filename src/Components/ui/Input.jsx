export function Input({ className = "", ...props }) {
  return (
    <input
      className={`px-3 py-2 rounded-md border border-neutral-700 bg-neutral-800 text-neutral-100 ${className}`}
      {...props}
    />
  );
}
