import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/Login/login'; 
import { Registerpage } from '../pages/register/register';
import { profilepage } from '../pages/profile/profile';
import { ProvidersPage } from '../pages/providers/providers';
import { Shelter1Page } from '../pages/shelter1/shelter1';
import { Shelter2Page } from '../pages/shelter2/shelter2';
import { Shelter3Page } from '../pages/shelter3/shelter3';
import { Shelter4Page } from '../pages/shelter4/shelter4';
import { Shelter5Page } from '../pages/shelter5/shelter5';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    Registerpage,
    profilepage,
    ProvidersPage,
    Shelter1Page,
    Shelter2Page,
    Shelter3Page,
    Shelter4Page,
    Shelter5Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    Registerpage,
    profilepage,
    ProvidersPage,
    Shelter1Page,
    Shelter2Page,
    Shelter3Page,
    Shelter4Page,
    Shelter5Page,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
