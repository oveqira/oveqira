export interface CookieEntry {
  name: string;
  provider: string;
  category: "essential" | "preferences" | "analytics" | "advertising";
  purpose: string;
  duration: string;
  type: "session" | "persistent";
  privacyUrl?: string;
}

export const cookieInventory: CookieEntry[] = [];
