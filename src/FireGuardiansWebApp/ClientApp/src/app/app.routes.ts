import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateFireReportComponent} from "./create-fire-report/create-fire-report.component";

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'report', component: CreateFireReportComponent },
];
