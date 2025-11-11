export function Button({ className = "", size, variant, ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-md border border-transparent ${className}`}
      {...props}
    />
  );
}
