import {Component, ChangeDetectorRef, OnDestroy, AfterViewInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {SpinnerService} from '../../core/service/spinner.service';

@Component({
  standalone: false,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnDestroy, AfterViewInit {

  private _mobileQueryListener: () => void;

  mobileQuery: MediaQueryList;

  showSpinner: boolean = false;

  /**
   * A callback method that performs custom clean-up, invoked immediately
   * before a directive, pipe, or service instance is destroyed.
   * @returns Empty
   */
  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  /**
   * A callback method that is invoked immediately after
   * Angular has completed initialization of a component's view.
   * It is invoked only once when the view is instantiated.
   * @returns Empty
   */
  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  /**
   * Constructor
   */
  constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher,
              public spinnerService: SpinnerService) {
    this.mobileQuery = this.media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }
}
