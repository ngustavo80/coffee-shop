export function formatCents(cents: number) {
  return String(cents).padEnd(2, '0')
}