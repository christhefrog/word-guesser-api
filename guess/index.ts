
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { checkGuess } from "../_word-guesser.js";

export const post = async (req: Request, res: Response) => {
    const guess = req.body.guess

    if (typeof guess !== "string") {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "Guess has to be a string" })
    }

    if (guess.length !== 5) {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: "Guess has to be 5 characters long" })
    }

    const result = checkGuess(guess)

    return res.status(StatusCodes.OK).json({ guess, result })
}
