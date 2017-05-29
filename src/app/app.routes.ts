import { Routes } from '@angular/router';
import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { DestinationsComponent } from './components/destinations';
import { NoContentComponent } from './components/no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',             component: HomeComponent },
  { path: 'home',         component: HomeComponent },
  { path: 'about',        component: AboutComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'detail',       loadChildren: './+detail#DetailModule'},
  { path: 'barrel',       loadChildren: './+barrel#BarrelModule'},
  { path: '**',           component: NoContentComponent },
];
