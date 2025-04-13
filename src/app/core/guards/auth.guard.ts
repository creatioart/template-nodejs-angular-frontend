import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {NotificationService} from '../service/notification.service';

/**
 * Auth Guard
 */
@Injectable()
export class AuthGuard implements CanActivate {

  /**
   * Function that checks whether the current user has permission to activate the requested route
   * @returns True/False
   */
  canActivate(): boolean {
    return true;
  }

  // Constructor
  constructor(private router: Router, private notificationService: NotificationService,
              private authService: AuthService) { }
}
