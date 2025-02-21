
import { Request, Response } from "express";
import { getWordOfTheDay } from "../_word-guesser.js";
import { StatusCodes } from "http-status-codes";
import { getDateString, getDaysSinceUnixEpoch, parseDateString } from "../_util.js";

export const get = async (req: Request, res: Response) => {
    const date = parseDateString(req.params["date"])

    if (date === null) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: "Invalid date provided"
        })
    }

    const day = getDaysSinceUnixEpoch(date)

    if (day >= getDaysSinceUnixEpoch()) {
        return res.status(StatusCodes.FORBIDDEN).json({
            error: "This answer is not public yet"
        })
    }

    return res.status(StatusCodes.OK).json({
        date: getDateString(date),
        answer: getWordOfTheDay(date)
    })
}