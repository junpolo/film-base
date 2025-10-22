export const parseScore = (score: string): string => {
  if (!score) return "N/A";
  return score.includes("/") ? score.split("/")[0] : score;
};
