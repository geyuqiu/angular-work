import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppIdInterceptor implements HttpInterceptor {

  private readonly APP_ID = 'APPID=faf17d6bfe1477a97755d5134779e59c';

  intercept(oldRequest: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (oldRequest.url.indexOf('weather')) {
      const clonedRequest = oldRequest.clone({url: oldRequest.url + '&' + this.APP_ID});
      return next.handle(clonedRequest);
    }
    return next.handle(oldRequest);
  }
}
