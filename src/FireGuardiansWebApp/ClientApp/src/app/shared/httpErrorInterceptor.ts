import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { MessageService } from '@meshmakers/shared-services';

export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private readonly messageService: MessageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        // let errorMessage = '';
        // if (error?.error?.statusCode && error?.error?.statusDescription) {
        //   // error provided by REST interface
        //   return throwError(() => <ApiError>error.error);
        // } else if (error.error instanceof ErrorEvent) {
        //   // client-side error
        //   errorMessage = `Error: ${error.error.message}`;
        // } else {
        //   // server-side error
        //   if (error.status === 404) {
        //
        //   }
        //
        //   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        // }
        //
        // this.messageService.showError(errorMessage, 'Error during communication with server');
        return throwError(() => error);
      })
    );
  }
}
