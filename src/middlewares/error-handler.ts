import {Response, Request, NextFunction} from "express"
import {HttpStatusCode} from "../common/HttpStatusCode"
import {AppError} from "../error/AppError"

export default function errorHandlerMiddleware(
  error: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  const errorMessage = getErrorMessage(error)
  logError(error)
  const errorResponse = {
    success: false,
    message: errorMessage,
    code: error.errorCode || "unexpected_error",
  }
  const statusCode = getHttpStatusCode(error)
  res.status(statusCode).json(errorResponse)
}

function getErrorMessage(error: AppError): string {
  if (error.message) {
    return error.message
  }
  return "Unexpected Error"
}
function logError(err: AppError): void {
  console.log("---------- ERROR ----------")
  console.log(err.stack)
  console.log("---------- /ERROR ----------")
}
function getHttpStatusCode(err: AppError): number {
  if (err.status) {
    return err.status
  }
  return HttpStatusCode.INTERNAL_SERVER_ERROR
}
