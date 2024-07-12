import { getMessage } from "@common/utils"
import { Catch, BadRequestException, ExceptionFilter, ArgumentsHost, UnprocessableEntityException, ConflictException } from "@nestjs/common"
import { Response } from "express"

@Catch(ConflictException)
export class CustomConflictException implements ExceptionFilter<ConflictException> {
  public catch (exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest() as Request
    const response = ctx.getResponse() as Response
    const language = request.headers['language'];
    const message = exception.getResponse().message;
    console.log('in conflict exceptio');
    response
      .status(400)
      .json({
        statusCode: 400,
        error: `Conflict Error`,
        message:  getMessage(message, language),
      })
  }
}