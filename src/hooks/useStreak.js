import { todayISO, subtractDays } from "../utils/dateHelpers.js";

export function useStreak(gamification) {
  const { dailyActivity = {}, currentStreak = 0 } = gamification;
  const today = todayISO();
  const hasActivityToday = !!dailyActivity[today];
  const hasActivityYesterday = !!dailyActivity[subtractDays(today, 1)];

  const isStreakAtRisk = !hasActivityToday;

  return { currentStreak, isStreakAtRisk, hasActivityToday, hasActivityYesterday };
}
