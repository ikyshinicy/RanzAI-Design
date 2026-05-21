export type PaymentStatus = "pending" | "paid" | "failed";

export function mapPaymentStatus(status: string): PaymentStatus {
  if (status === "paid" || status === "settlement" || status === "capture") return "paid";
  if (status === "failed" || status === "deny" || status === "expire") return "failed";
  return "pending";
}
