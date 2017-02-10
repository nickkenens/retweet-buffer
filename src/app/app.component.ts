import { Component } from '@angular/core';
import { TwitterService } from "./services/twitter/twitter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app does work!';

  constructor(private twitterService: TwitterService) {

  }
}
