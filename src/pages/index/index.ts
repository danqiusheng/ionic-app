import {Component, OnInit, ViewChild} from "@angular/core";
import {IonicPage, Nav} from "ionic-angular";
import {HomePage} from "../home/home";
import {ListPage} from "../list/list";
import {SidebarService} from "../../app/layout/sidebar/sidebar.service";

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
// 这个主要作为Module进行加载
export class IndexPage implements  OnInit{
  @ViewChild(Nav) nav: Nav;

  homePage: any = 'TabsPage';
  listPage: any = 'ListPage';

  pages: Array<{ title: string, component: any }> = [
    {title: 'go back', component: 'GoBckComponent'},
    {title: 'Tabs', component: 'TabsPage'},
    {title: 'Home', component: 'HomePage'},
    {title: 'List', component: 'ListPage'},{title: 'LogOut', component: 'UserLoginPage'}];

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  constructor(private sideBarService: SidebarService) {
  }

  ngOnInit(): void {
    console.log(this.sideBarService.menuArr);
  }


}
