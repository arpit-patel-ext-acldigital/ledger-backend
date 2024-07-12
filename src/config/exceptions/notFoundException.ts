import { getMessage } from "@common/utils"
import { Catch, BadRequestException, ExceptionFilter, ArgumentsHost, UnprocessableEntityException, ConflictException, NotFoundException } from "@nestjs/common"
import { Response } from "express"

@Catch(NotFoundException)
export class CustomNotFoundException implements ExceptionFilter<NotFoundException> {
  public catch (exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest() as Request
    const response = ctx.getResponse() as Response
    const language = request.headers['language'];
    const message = exception.getResponse().message;
    response
      .status(404)
      .json({
        statusCode: 404,
        error: `Requested Resouece Not Found`,
        message: getMessage(message, language),
      })
  }
}