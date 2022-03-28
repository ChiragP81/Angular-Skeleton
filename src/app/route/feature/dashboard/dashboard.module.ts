import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';
import { MypipePipe } from 'src/app/shared/pipes/mypipe.pipe';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [DashboardComponent,
  MypipePipe
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule,
    MaterialModule,
    ],
  exports: [],
  providers: [],
})
export class DashboardModule { }
