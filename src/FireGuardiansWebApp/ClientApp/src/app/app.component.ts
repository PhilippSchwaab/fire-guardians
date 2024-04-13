import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from "@angular/material/sidenav";
import {FooterComponent} from "./navigation/footer/footer.component";
import {SideNavListComponent} from "./navigation/side-nav-list/side-nav-list.component";
import {HeaderComponent} from "./navigation/header/header.component";
import {IaSharedUIModule} from "@meshmakers/shared-ui";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, FooterComponent, SideNavListComponent, HeaderComponent, IaSharedUIModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';
}
