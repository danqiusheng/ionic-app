import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {UserLoginPage} from "./login";

@NgModule({
  declarations: [
    UserLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(UserLoginPage),
  ],
  entryComponents: [
    UserLoginPage
  ]
})
export class LoginModule {

}
