export type Rank =
  | "ROOKIE"
  | "ADVOCATE"
  | "CHAMPION"
  | "ELITE"
  | "MASTER"
  | "LEGEND"
  | "ICON";

export function getRank(referrals: number): Rank {
  if (referrals > 50000) return "ICON";
  if (referrals > 10000) return "LEGEND";
  if (referrals > 5000) return "MASTER";
  if (referrals > 1000) return "ELITE";
  if (referrals > 500) return "CHAMPION";
  if (referrals > 100) return "ADVOCATE";
  return "ROOKIE";
}

export function getNextRank(currentRank: Rank): {
  next: Rank | null;
  threshold: number;
} {
  switch (currentRank) {
    case "ROOKIE":
      return { next: "ADVOCATE", threshold: 101 };
    case "ADVOCATE":
      return { next: "CHAMPION", threshold: 501 };
    case "CHAMPION":
      return { next: "ELITE", threshold: 1001 };
    case "ELITE":
      return { next: "MASTER", threshold: 5001 };
    case "MASTER":
      return { next: "LEGEND", threshold: 10001 };
    case "LEGEND":
      return { next: "ICON", threshold: 50001 };
    case "ICON":
      return { next: null, threshold: 0 };
  }
}
