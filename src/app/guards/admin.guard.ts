import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);

  if (!localStorage.getItem("token")) {
    router.navigate(["/login"]);
    return false;
  } else {
    return true;
  }

};
