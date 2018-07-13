import {Component} from '@angular/core';
import "rxjs/add/operator/map";
import {UserService} from "../user.service";
import {User} from "../model/user";
import {IonicPage, NavController} from "ionic-angular";
import {TooltipUtils} from "../../../app/shared/utils/tooltip-utils";
import {SidebarService} from "../../../app/layout/sidebar/sidebar.service";

@IonicPage()
@Component({
  selector: 'app-user-login',
  templateUrl: './login.html',
  providers: [ TooltipUtils],
})
export class UserLoginPage {
  private user: User = {
    un: '20030646',
    pw: '123456',
  };

  flag = false;

  //
  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private sideBarService: SidebarService,
    private tooltipUtils: TooltipUtils,
  ) {
  }

  // 登录请求
  login(): void {
    /*
     1. 提示正在登录
     2. 禁止登录按钮
     3. 登录成功，则跳转菜单页面
     4. 登录失败，则提示登录失败，并启用登录按钮
     */
    //this.navCtrl.setRoot('IndexPage');
    this.sideBarService.menuArr = [   'Home',
         'List' ];
    let loading = this.tooltipUtils.showWaiting('正在登录.....', 3000);
    this.flag = true;
    // 调用service的登录
    this.userService.login(this.user).subscribe(data => {
      if (data.menus === undefined) {
        loading.dismissAll();
        this.tooltipUtils.showOK('登录失败', data.result, ['确定']);
        this.flag = false;
      } else {
        loading.dismissAll();
        this.sideBarService.menuArr = data.menus;
        //  重新到Home界面
        this.navCtrl.setRoot('IndexPage');
      }
    }, error => {
      loading.dismissAll();
      this.tooltipUtils.showOK('登录失败', JSON.stringify(error), ['确定']);
      this.flag = false;
    });
  }
}
