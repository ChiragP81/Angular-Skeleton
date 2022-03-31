import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule

  ],
  exports: [
  ]
})
export class FeatureModule { }
