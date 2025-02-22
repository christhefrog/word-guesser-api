
import Rand from 'rand-seed';
import { getDaysSinceUnixEpoch } from './_util.js';
import { words } from './_words.js';

export function getWordOfTheDay(date: Date = new Date()): string {
    const day = getDaysSinceUnixEpoch(date);
    const rand = new Rand(day.toString());
    return words[Math.floor(rand.next() * words.length)]
}

export function checkGuess(guess: string, date: Date = new Date()): any[] {
    const wordOfTheDay = getWordOfTheDay(date)

    var result: any[] = [];
    for (let i: number = 0; i < guess.length; i++) {
        let status = ""

        if (guess[i] === wordOfTheDay[i]) status = "correct"
        else if (wordOfTheDay.includes(guess[i])) status = "misplaced"
        else status = "absent"

        result[i] = { position: i, character: guess[i], status }
    }
    return result;
}
