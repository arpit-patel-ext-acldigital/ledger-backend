import { Catch, BadRequestException, ExceptionFilter, ArgumentsHost, UnprocessableEntityException, ConflictException, UnauthorizedException } from "@nestjs/common"
import { Response } from "express"

@Catch(UnauthorizedException)
export class CustomUnauthorizedException implements ExceptionFilter<UnauthorizedException> {
  public catch (exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse() as Response
    const message = exception.getResponse().message;
    response
      .status(401)
      .json({
        statusCode: 401,
        error: `un-authorized exception`,
        message: message,
      })
  }
}