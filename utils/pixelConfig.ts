// Pixel configuration for each branch
// Export a map and a helper function to get the correct Meta Pixel ID

export const pixelMap: Record<string, string> = {
  // 한림점 (Hallim)
  "hallim": "931401023110366",
  // 도남점 (Donam)
  "donam": "26658899260438637",
  // 노형점 (Nohyeong)
  "nohyeong": "891686733924318",
};

/**
 * Returns the Meta Pixel ID for a given branch name.
 * The branch name is case‑insensitive and may be provided in Korean or English.
 *
 * @param branch - The branch identifier (e.g. "hallim", "donam", "nohyeong").
 * @returns The pixel ID string or `undefined` if the branch is unknown.
 */
export function getPixelId(branch: string): string | undefined {
  if (!branch) return undefined;
  const key = branch.trim().toLowerCase();
  return pixelMap[key] ?? pixelMap[translateKoreanBranch(key)];
}

// Helper that translates Korean branch names to the map keys.
function translateKoreanBranch(korean: string): string | undefined {
  switch (korean) {
    case "한림점":
    case "hallim":
      return "hallim";
    case "도남점":
    case "donam":
      return "donam";
    case "노형점":
    case "nohyeong":
      return "nohyeong";
    default:
      return undefined;
  }
}
