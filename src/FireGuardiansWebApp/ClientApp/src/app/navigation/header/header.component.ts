import {Component, EventEmitter, Output} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {AuthorizeService} from "@meshmakers/shared-auth";
import {ConfigurationService} from "../../services/configuration/configuration.service";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    AsyncPipe,
    MatMenu,
    MatMenuTrigger,
    MatIconButton,
    NgIf,
    NgOptimizedImage,
    MatMenuItem
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string | null>;
  public authority: Observable<string | null>;
  public tenantId: Observable<string>;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    activatedRoute: ActivatedRoute,
    private readonly authorizeService: AuthorizeService,
    public configurationService: ConfigurationService
  ) {
    this.isAuthenticated = of(false);
    this.userName = of(null);
    this.authority = of(null);
    this.tenantId = activatedRoute.params.pipe(map((p) => p['tenantId']));
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

  onToggleSidenav(): void {
    this.sidenavToggle.emit();
  }

}
