import { Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { MeComponent } from './me/me.component';
export const RootRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'me', component: MeComponent}
]