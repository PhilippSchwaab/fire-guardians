import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from "@angular/material/divider";
import { VERSION } from '../../../environments/currentVersion';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatDividerModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  protected readonly version = VERSION;
}
