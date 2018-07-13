import {Inject} from '@angular/core';
import {User} from "./model/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ResponseUser} from "./model/response-user";
import {AppGloabal} from "../../app/app.service";


@Inject({})
// 用户服务，提供对用户的基本操作
export class UserService {

  // 当前登录用户 ，后期用localstorege
  current_login_user: User;

  constructor(private http: HttpClient,) {
  }

  // 登录请求
  login(user: User): Observable<ResponseUser> {
    return this.http.get(AppGloabal.API.userLogin, {
      params: {un: user.un, pw: user.pw},
      responseType: 'text'
    })//
      .map(data => {
          const obj = JSON.parse(data.replace(new RegExp("\\\\", 'g'), ''));
          return  {
            result: obj.result,
            menus: obj.url,
          }
        }
      )
  }


}
