import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './route/auth/auth.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FeatureModule } from './route/feature/feature.module';
import { MaterialModule } from './shared/material.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { SocialAuthServiceConfig, SocialLoginModule, } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { HeaderInterceptor } from './shared/interceptors/header.interceptor';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from 'src/environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
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
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  exports: [
    MaterialModule,
    FeatureModule,
    SharedModule,
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
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
  },
  { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



