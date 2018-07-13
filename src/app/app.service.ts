import {Injectable} from "@angular/core";

@Injectable()
export class AppGloabal {

  static domain = "http://localhost:8081/prj-yn";

  // 接口地址
  static API: any = {
    userLogin: '/api/ext/script/appLoginFetchUrls', // 用户登录接口
  }
}

@Injectable()
export class AppService {

}
