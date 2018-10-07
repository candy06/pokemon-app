import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-header',
  templateUrl: './application-header.component.html',
  styleUrls: ['./application-header.component.scss']
})
export class ApplicationHeaderComponent implements OnInit {

  @Input() private applicationTitle: string;
  @Input() private applicationDevelopper: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * Navigate to the app's home page
   */
  private home(): void {
    this.router.navigate(['home']);
  }

}
