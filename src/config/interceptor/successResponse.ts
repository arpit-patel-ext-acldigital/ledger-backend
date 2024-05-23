import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import e from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class successResponse implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    // if (request?.method != 'GET') {
      return next.handle().pipe(map(data => this.responseHandler(data, context)));
    // } else {
    //   return next.handle().pipe(map(data => {
    //     console.log('data', data);
    //     return{ data }}));
    // }
  }

  responseHandler(res: any, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    return response.status(200).json({
      statusCode: 200,
      message: res?.message,
      data: res?.data,
    });
  }
}