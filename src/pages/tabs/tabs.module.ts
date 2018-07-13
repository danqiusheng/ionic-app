import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import {ContactPage} from "../contact/contact";
import {AboutPage} from "../about/about";
import {AboutPageModule} from "../about/about.module";
import {ContactPageModule} from "../contact/contact.module";

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),ContactPageModule,AboutPageModule
  ],



})
export class TabsPageModule {}
