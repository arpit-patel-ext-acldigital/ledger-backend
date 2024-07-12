import { getMessage } from "@common/utils"
import { Catch, BadRequestException, ExceptionFilter, ArgumentsHost, UnprocessableEntityException, ConflictException, UnauthorizedException } from "@nestjs/common"
import { Response } from "express"

@Catch(UnauthorizedException)
export class CustomUnauthorizedException implements ExceptionFilter<UnauthorizedException> {
  public catch (exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest() as Request
    const response = ctx.getResponse() as Response
    const language = request.headers['language'];
    const message = exception.getResponse().message;
    response
      .status(401)
      .json({
        statusCode: 401,
        error: `un-authorized exception`,
        message: getMessage(message, language),
      })
  }
}