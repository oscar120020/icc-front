import { RankingResponse } from "../interfaces/rankingsResponse";
import { RakingGlobal } from "../interfaces/seasonResponse";

export const getNewerRanking = (ranking: RankingResponse[]) => {
  const valid = ranking.filter(rank => rank.scores.length > 0)
  return valid.sort(
    (a, b) => new Date(b.beginning).getTime() - new Date(a.beginning).getTime()
  )[0];
};

export const orderScores = (scores: RakingGlobal[]) => {
  return scores.sort(function (a, b) {
    return b.score - a.score || a.penalty - b.penalty || a.rank - b.rank;
  });
};

export const ordinal_suffix_of = (i: number) => {
  const j = i % 10
  const k = i % 100;

  if (j === 1 && k !== 11) {
      return i + "st";
  }
  if (j === 2 && k !== 12) {
      return i + "nd";
  }
  if (j === 3 && k !== 13) {
      return i + "rd";
  }
  return i + "th";
}