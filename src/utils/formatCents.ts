export function formatCents(coffeeCents: number) {
  return String(coffeeCents).padEnd(2, '0')
}