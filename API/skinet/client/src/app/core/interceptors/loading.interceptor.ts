import { environment } from 'src/environments/environment';
import { BusyService } from './../services/busy.service';
import { delay, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { identity, Observable } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (

      request.url.includes('emailExists') ||
      request.method === 'POST' && request.url.includes('orders')||
      request.method === 'DELETE'
      ) {
        return next.handle(request);
    }

    this.busyService.busy();
    return next.handle(request).pipe(
      (environment.production? identity : delay(1000)),
      finalize(() => this.busyService.idle())
    );
  }
}
