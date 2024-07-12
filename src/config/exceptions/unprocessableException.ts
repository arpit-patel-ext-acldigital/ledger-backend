import { getMessage } from "@common/utils"
import { Catch, BadRequestException, ExceptionFilter, ArgumentsHost, UnprocessableEntityException } from "@nestjs/common"
import { Response } from "express"

@Catch(UnprocessableEntityException)
export class ValidationExceptionFilter implements ExceptionFilter<UnprocessableEntityException> {
  public catch (exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest() as Request
    const response = ctx.getResponse() as Response
    const language = request.headers['language'];
    const message = exception.getResponse()?.message;
    response
      .status(422)
      .json({
        statusCode: 422,
        error: `Unprocessable Entity`,
        message: getMessage(message, language),
      })
  }
}