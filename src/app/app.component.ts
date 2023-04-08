import {Component, OnInit} from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Kevin Haynes - Main';
  isLightMode = false;
  theme_icon = "light_mode";

  constructor(private titleService: Title) {  }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

  onChangeToggle() {
    this.isLightMode = !this.isLightMode;
    if (this.isLightMode) {
      this.theme_icon = "dark_mode";
    } else {
      this.theme_icon = "light_mode";
    }
  }
}
