

export const convertSocialMetric = (count: number): string => {
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
  } else if (count >= 1_000) {
    return `${(count / 1_000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return count.toString();
};
  