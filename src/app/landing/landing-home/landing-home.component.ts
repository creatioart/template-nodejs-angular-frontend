import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NotificationService} from '../../core/service/notification.service';

@Component({
  standalone: false,
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.css']
})
export class LandingHomeComponent implements OnInit {

  /**
   * A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   * Define an ngOnInit() method to handle any additional initialization tasks.
   * @returns Empty
   */
  ngOnInit() {
    console.log('Landing home loaded');
    this.titleService.setTitle('Creatio ART | Desarrollo de aplicaciones');

    setTimeout(() => {
      this.notificationService.openSnackBar('Bienvenido!');
    });
  }

  /**
   * Constructor
   */
  constructor(private notificationService: NotificationService, private titleService: Title) {
  }
}
