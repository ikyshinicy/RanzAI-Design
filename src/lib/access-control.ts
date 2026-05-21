export function hasProAccess(plan: string | null | undefined) {
  return plan === "pro" || plan === "business";
}
