import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicValComponent } from 'src/app/shared/components/dynamic-val/dynamic-val.component';
import { LoginGuard } from 'src/app/shared/guard/login.guard';
import { DatatableComponent } from './datatable/datatable.component';
import { PostsComponent } from './post/posts/posts.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [LoginGuard]
  },
  {path:'profile',component:ProfileComponent},
  {path:'datatable',component:DatatableComponent},
  {path:'dynamic',component:DynamicValComponent},
  {path:'post',component:PostsComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
