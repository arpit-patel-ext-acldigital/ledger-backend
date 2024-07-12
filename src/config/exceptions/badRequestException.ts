import { getMessage } from "@common/utils"
import { Catch, BadRequestException, ExceptionFilter, ArgumentsHost, UnprocessableEntityException, ConflictException } from "@nestjs/common"
import { Response } from "express"

@Catch(BadRequestException)
export class CustomBadRequest implements ExceptionFilter<BadRequestException> {
  public catch (exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest() as Request
    const response = ctx.getResponse() as Response
    const language = request.headers['language'];
    const message = exception.getResponse().message;
    response
      .status(400)
      .json({
        statusCode: 400,
        error: `Bad Error`,
        message: getMessage(message, language),
      })
  }
}