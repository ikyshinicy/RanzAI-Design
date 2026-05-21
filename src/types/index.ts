export type UserPlan = "free" | "pro" | "business";

export type DesignProject = {
  id: string;
  userId: string;
  title: string;
  brief: string;
  result: string;
  createdAt: string;
};
