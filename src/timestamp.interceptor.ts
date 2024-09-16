import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  
  @Injectable()
  export class TimestampsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const request = context.switchToHttp().getRequest();
  
      // Verifica se é uma operação de criação (POST)
      if (request.method === 'POST') {
        request.body.createdAt = new Date();
        request.body.updatedAt = new Date();
      }
  
      // Verifica se é uma operação de atualização (PUT ou PATCH)
      if (request.method === 'PUT' || request.method === 'PATCH') {
        request.body.updatedAt = new Date();
      }
  
      return next.handle().pipe(
        tap(() => {
          // Você pode adicionar mais lógicas se precisar
        }),
      );
    }
  }
  