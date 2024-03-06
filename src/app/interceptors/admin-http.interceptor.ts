import { HttpInterceptorFn } from '@angular/common/http';


export const adminHttpInterceptor: HttpInterceptorFn = (req, next) => {
  let finalReq = req.clone();

  if (localStorage.getItem("token")) {
    finalReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${window.localStorage.getItem("token")}`),
    });
  }
  return next(finalReq);


};
