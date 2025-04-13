import {UserModel} from '../../../../model/user.model';

/**
 * IAuth Service
 */
export interface IAuthService {
  /**
   * Get current user
   * @returns User Model
   */
  getCurrentUser(): UserModel;

  /**
   * Login user
   * @param email Email
   * @param password Password
   * @returns True/False
   */
  login(email: string, password: string): Promise<boolean>;

  /**
   * Request reset password
   * @returns True/False
   */
  requestResetPassword(): boolean;

  /**
   * Reset password
   * @param email Email
   * @param token Token
   * @param newPassword New password
   * @returns True/False
   */
  resetPassword(email: string, token: string, newPassword: string): boolean;

  /**
   * Request change password
   * @param email Email
   * @param currentPassword Current password
   * @param newPassword New password
   * @returns True/False
   */
  requestChangePassword(email: string, currentPassword: string, newPassword: string): boolean;

  /**
   * Logout user
   * @returns True/False
   */
  logout(): boolean;
}
