import {Component, EventEmitter, Output} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {AuthorizeService} from "@meshmakers/shared-auth";
import {ConfigurationService} from "../../services/configuration/configuration.service";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatListItemIcon, MatNavList} from "@angular/material/list";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-side-nav-list',
  standalone: true,
  imports: [
    MatDivider,
    MatIcon,
    MatNavList,
    MatListItemIcon,
    RouterLink,
    MatListItem
  ],
  templateUrl: './side-nav-list.component.html',
  styleUrl: './side-nav-list.component.scss'
})
export class SideNavListComponent {
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string | null>;
  public authority: Observable<string | null>;

  @Output() sidenavClose = new EventEmitter();

  constructor(
    private readonly authorizeService: AuthorizeService,
    public configurationService: ConfigurationService
  ) {
    this.isAuthenticated = of(false);
    this.userName = of(null);
    this.authority = of(null);

  }

  ngOnInit(): void {
    this.isAuthenticated = this.authorizeService.getIsAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map((u) => u?.name ?? null));
    this.authority = this.authorizeService.getAuthority();
  }

  public login(): void {
    this.authorizeService.login();
  }

  public logout(): void {
    this.authorizeService.logout();
  }

  public onSidenavClose = (): void => {
    this.sidenavClose.emit();
  };

}
