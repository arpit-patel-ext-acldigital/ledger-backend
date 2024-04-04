import { Catch, BadRequestException, ExceptionFilter, ArgumentsHost, UnprocessableEntityException, ConflictException, InternalServerErrorException, HttpException } from "@nestjs/common"
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler"
import { Response } from "express"

@Catch(Error)
export class CustomInternalServer implements ExceptionFilter<InternalServerErrorException> {
  public catch (exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse() as Response
    console.log(exception);
    response
      .status(500)
      .json({
        statusCode: 500,
        error: `Internal Server Error`,
        message: exception.message,
      })
  }
}