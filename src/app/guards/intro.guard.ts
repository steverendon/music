import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private storage: Storage,
    private router: Router) {}
/*   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } */
  async canActivate(){
    const isIntroShowed = await this.storage.get('isIntroShowed')
    if(isIntroShowed) {
      return true;
    } else {
      this.router.navigateByUrl('/intro');
    }
    return false;
  }
  
}
