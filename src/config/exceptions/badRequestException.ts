import { Catch, BadRequestException, ExceptionFilter, ArgumentsHost, UnprocessableEntityException, ConflictException } from "@nestjs/common"
import { Response } from "express"

@Catch(BadRequestException)
export class CustomBadRequest implements ExceptionFilter<BadRequestException> {
  public catch (exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse() as Response
    const message = exception.getResponse().message;
    response
      .status(400)
      .json({
        statusCode: 400,
        error: `Bad Error`,
        message: message,
      })
  }
}