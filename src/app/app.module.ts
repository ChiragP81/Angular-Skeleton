import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './route/auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from './route/feature/feature.module';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AuthService } from './shared/services/auth.service';
import { SocialAuthServiceConfig, SocialLoginModule, } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    FeatureModule,
    LayoutModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
    SocialLoginModule,
  ],
  exports: [MaterialModule,
    FeatureModule,
    SharedModule],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('138652340696-kevbdmj6ehmpbb93tn77ksfs5f4t4h5v.apps.googleusercontent.com')
        }
      ],
      onError: (err: any) => {
        console.log(err);
      }
    } as SocialAuthServiceConfig,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }



//client secert id:-
// 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
