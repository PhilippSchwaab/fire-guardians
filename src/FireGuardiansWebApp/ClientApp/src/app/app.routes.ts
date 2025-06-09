import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateFireReportComponent} from "./create-fire-report/create-fire-report.component";
import {AuthorizeGuard} from "@meshmakers/shared-auth";

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthorizeGuard] },
  { path: 'report', component: CreateFireReportComponent, canActivate: [AuthorizeGuard] },
];
