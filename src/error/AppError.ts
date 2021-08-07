import {HttpStatusCode} from "../common/HttpStatusCode"

export class AppError extends Error {
  constructor(
    public status: HttpStatusCode,
    public message: string,
    public errorCode: string,
  ) {
    super(message)
  }
}
