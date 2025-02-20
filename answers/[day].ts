
import { Request, Response } from "express";
import { getWordOfTheDay } from "../_word-guesser.js";
import { StatusCodes } from "http-status-codes";
import { getDaysSinceEpoch } from "../_util.js";

export const get = async (req: Request, res: Response) => {
    const day = Number(req.params["day"])

    if (Number.isNaN(day)) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: "Day is not a number"
        })
    }

    if (day >= getDaysSinceEpoch(Date.now())) {
        return res.status(StatusCodes.FORBIDDEN).json({
            error: "This answer is not public yet"
        })
    }

    return res.status(StatusCodes.OK).json({
        day: day,
        answer: getWordOfTheDay(day)
    })
}