/**
 * Notification Service
 */
export interface INotificationService {
  /**
   * Open snack bar
   * @param message Message
   * @returns None
   */
  openSnackBar(message: string): void;
}
