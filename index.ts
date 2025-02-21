
import { Request, Response } from "express";
import { getDateString, getSecondsUntillNextDay } from "./_util.js";
import { StatusCodes } from "http-status-codes";

export const get = async (req: Request, res: Response) => {
    return res.status(StatusCodes.OK).json({ date: getDateString(new Date()), secondsUntillNextDay: getSecondsUntillNextDay() })
}
