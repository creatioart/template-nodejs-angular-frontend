import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {INotificationService} from './interface/inotification.service';

/**
 * Notification Service
 */
@Injectable({
  providedIn: 'root'
})
export class NotificationService implements INotificationService {
  /**
   * Open snack bar
   * @param message Message
   * @returns None
   */
  public openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      duration: 5000
    });
  }

  // Constructor
  constructor(private snackBar: MatSnackBar) { }
}
