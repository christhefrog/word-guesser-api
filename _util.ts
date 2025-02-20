
export function getDaysSinceEpoch(timestamp: number): number {
    return Math.floor(timestamp / (1000 * 60 * 60 * 24));
}

export function getSecondsUntillNextDay(timestamp: number): number {
    const now = new Date(timestamp)
    const nextDay = new Date(now);
    nextDay.setUTCHours(24, 0, 0, 0);

    return Math.floor((nextDay.getTime() - now.getTime()) / 1000);
}
