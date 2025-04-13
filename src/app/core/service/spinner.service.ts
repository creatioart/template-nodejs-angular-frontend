import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ISpinnerService} from './interface/ispinner.service';

/**
 * Spinner Service
 */
@Injectable({
  providedIn: 'root'
})
export class SpinnerService implements ISpinnerService {

  visibility = new BehaviorSubject(false);

  /**
   * Show spinner
   * @returns None
   */
  public show(): void {
    this.visibility.next(true);
  }

  /**
   * Hide spinner
   * @returns None
   */
  public hide(): void {
    this.visibility.next(false);
  }

  // Constructor
  constructor() { }
}
