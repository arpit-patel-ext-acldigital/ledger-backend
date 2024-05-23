import { ValidationPipe, ArgumentMetadata, BadRequestException, UnprocessableEntityException } from "@nestjs/common"

interface message {
  message: [string],
  error: string,
  statusCode: number
}
export class CustomValidationPipe extends ValidationPipe {
    public async transform (value, metadata: ArgumentMetadata) {
      try {
        return await super.transform(value, metadata)
      } catch (e) {
        if (e instanceof BadRequestException) {
          const res = e.getResponse() as message;
          const msg = res?.message?.join(' , ');
          throw new UnprocessableEntityException(msg)
        }
      }
    }
  }
  