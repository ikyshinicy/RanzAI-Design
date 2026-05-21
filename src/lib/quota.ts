export function canUseTool(currentUsage: number, limit: number) {
  return currentUsage < limit;
}
