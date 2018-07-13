import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";
import {SidebarService} from "./layout/sidebar/sidebar.service";
import {HomeModule} from "../pages/home/home.module";
import {ListModule} from "../pages/list/list.module";
import {UserService} from "../pages/user/user.service";
import {LoginModule} from "../pages/user/user-login/login.module";
import {AppService} from "./app.service";
import {TabsPage} from "../pages/tabs/tabs";
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";

@NgModule({
  declarations: [
    MyApp,
   // TabsPage,
   //  AboutPage,
   //  ContactPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SidebarService,AppService
  ]
})
export class AppModule {
}
