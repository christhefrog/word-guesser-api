
import Rand from 'rand-seed';
import { getDaysSinceEpoch } from './_util.js';
import { words } from './_words.js';

export function getWordOfTheDay(day: number = getDaysSinceEpoch(Date.now())): string {
    const rand = new Rand(day.toString());
    return words[Math.floor(rand.next() * words.length)]
}
