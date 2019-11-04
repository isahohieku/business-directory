import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UtilService } from '../../../services/util.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, OnDestroy {
  subscription: Subscription;
  loginStatus: boolean;

  constructor(
    private util: UtilService,
    private router: Router) {
    this.listenToUserObjChange();
  }

  listenToUserObjChange() {
    if (this.util.getUserObject() !== null) {
      this.loginStatus = true;
      return;
    }

    this.loginStatus = false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.loginStatus) {
      localStorage.clear();
      // this.util.loginStatus.next(false);
      return this.router.navigate(['/']);
    }

    return true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
