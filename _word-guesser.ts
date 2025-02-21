
import Rand from 'rand-seed';
import { getDaysSinceUnixEpoch } from './_util.js';
import { words } from './_words.js';

export function getWordOfTheDay(date: Date = new Date()): string {
    const day = getDaysSinceUnixEpoch(date);
    const rand = new Rand(day.toString());
    return words[Math.floor(rand.next() * words.length)]
}
