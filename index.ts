
import { Request, Response } from "express";
import { getDaysSinceEpoch, getSecondsUntillNextDay } from "./_util.js";
import { StatusCodes } from "http-status-codes";

export const get = async (req: Request, res: Response) => {
    const timestamp = Date.now();
    return res.status(StatusCodes.OK).json({ currentDay: getDaysSinceEpoch(timestamp), secondsUntillNextDay: getSecondsUntillNextDay(timestamp) })
}
