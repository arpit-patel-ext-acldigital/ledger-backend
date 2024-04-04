import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomValidationPipe } from './customValidator/validator';
import { responses } from './exceptions';
import { successResponse } from './interceptor/successResponse';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new CustomValidationPipe())
  app.useGlobalFilters(...responses);
  app.useGlobalInterceptors(new successResponse());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
