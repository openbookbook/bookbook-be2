import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();

    console.group();
    console.log(`(${request.method}) ${request.url}`);

    const handled = next.handle();

    console.groupEnd();
    return handled;
  }
}
