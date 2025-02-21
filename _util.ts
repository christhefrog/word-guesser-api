
export function getDaysSinceUnixEpoch(date: Date = new Date()): number {
    const timestamp = date.getTime();
    return Math.floor(timestamp / (1000 * 60 * 60 * 24));
}

export function getSecondsUntillNextDay(date: Date = new Date()): number {
    const nextDay = new Date(date);
    nextDay.setUTCHours(24, 0, 0, 0);

    return Math.floor((nextDay.getTime() - date.getTime()) / 1000);
}

export function getDateString(date: Date): string {
    return date.toISOString().split('T')[0];
}

export function parseDateString(dateString: string): Date | null {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? null : date;
}
