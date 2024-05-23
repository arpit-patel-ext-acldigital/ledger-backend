import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomValidationPipe } from '@config/customValidator/validator';
import { responses } from '@config/exceptions';
import { successResponse } from '@config/interceptor/successResponse';
import * as path from 'path';
if(path.extname(__filename) === '.js') {
  require('module-alias');
}


async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new CustomValidationPipe())
  app.useGlobalInterceptors(new successResponse());
  app.useGlobalFilters(...responses);
  await app.listen(3000);
}
bootstrap();
