import { Catch, BadRequestException, ExceptionFilter, ArgumentsHost, UnprocessableEntityException } from "@nestjs/common"
import { Response } from "express"

@Catch(UnprocessableEntityException)
export class ValidationExceptionFilter implements ExceptionFilter<UnprocessableEntityException> {
  public catch (exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse() as Response
    const message = exception.getResponse()?.message;
    response
      .status(422)
      .json({
        statusCode: 422,
        error: `Unprocessable Entity`,
        message: message,
      })
  }
}