import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ConfirmComponent } from './components/confirm/confirm/confirm.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormdataComponent } from './components/formdata/formdata.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommantableComponent } from './components/commantable/commantable.component';




@NgModule({
  declarations: [
    NotfoundComponent,
    ConfirmComponent,
    FormdataComponent,
    CommantableComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    CommantableComponent
  ]
})
export class SharedModule { }
