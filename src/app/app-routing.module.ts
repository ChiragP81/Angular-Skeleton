import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./route/auth/auth.module').then(x => x.AuthModule) },
  { path: 'feature',
  component:LayoutComponent,
  loadChildren: () => import('./route/feature/feature.module').then(x => x.FeatureModule) },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
