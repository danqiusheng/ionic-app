import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {IndexPage} from "./index";
import {ListPage} from "../list/list";
import {HomePage} from "../home/home";

@NgModule({
  declarations: [
    IndexPage,
  ],
  imports: [
    IonicPageModule.forChild(IndexPage),
  ],
})
export class IndexModule{

}
