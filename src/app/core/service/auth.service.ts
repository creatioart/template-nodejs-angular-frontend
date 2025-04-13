import {Injectable} from '@angular/core';
import {UserModel} from '../../../model/user.model';
import {IAuthService} from './interface/iauth.service';
import { Router } from '@angular/router';

/**
 * Auth Service
 */
@Injectable({
    providedIn: 'root'
})
export class AuthService implements IAuthService {

  currentUser!: UserModel | undefined;

  /**
   * Get current user
   * @returns User Model
   */
  public getCurrentUser(): UserModel {
    console.log(`Get current user`);

    console.log(this.currentUser);

    if (this.currentUser !== undefined) {
      return this.currentUser;
    }

    this.router.navigate(['/auth/login']);
    throw new Error('Invalidate current user');
  }

  /**
   * Login user
   * @param email Email
   * @param password Password
   * @returns True/False
   */
  public async login(email: string, password: string): Promise<boolean> {
    console.log(`Login user for ${email} email - ${password} password`);

    // Create user
    const expiration = new Date();
    expiration.setUTCHours(expiration.getUTCHours() + 1);
    this.currentUser = new UserModel();

    return true;
  }

  /**
   * Request reset password
   * @returns True/False
   */
  public requestResetPassword(): boolean {
    console.log(`Request reset password`);
    return true;
  }

  /**
   * Reset password
   * @param email Email
   * @param token Token
   * @param newPassword New password
   * @returns True/False
   */
  public resetPassword(email: string, token: string, newPassword: string): boolean {
    console.log(`Reset password. Email: ${email}. Token: ${token}. New Password: ${newPassword}`);
    return true;
  }

  /**
   * Request change password
   * @param email Email
   * @param currentPassword Current password
   * @param newPassword New password
   * @returns True/False
   */
  public requestChangePassword(email: string, currentPassword: string, newPassword: string): boolean {
    console.log(`Request change password. Email: ${email}. Current Password: ${currentPassword}. ` +
                `New Password: ${newPassword}`);
    return true;
  }

  /**
   * Logout user
   * @returns True/False
   */
  public logout(): boolean {
    console.log(`Logout user`);

    this.currentUser = undefined;
    this.router.navigate(['/auth/login']);
    return true;
  }

  // Constructor
  constructor(private router: Router) { }
}
