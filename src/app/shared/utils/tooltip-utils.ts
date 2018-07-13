// 消息提示弹出层
import {AlertController, LoadingController} from "ionic-angular";
import {Inject} from "@angular/core";
import {Alert} from "ionic-angular/components/alert/alert";
import {Loading} from "ionic-angular/components/loading/loading";

@Inject({})
export class TooltipUtils {

  constructor(private  alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  // 基本提示
  showOK(title: string, subTitle: string, buttons: Array<string>): Alert {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: buttons
    });
    alert.present();
    return alert;
  }


  // 提示并等待
  showWaiting(msg: string, duration: number): Loading {
    const loader = this.loadingCtrl.create({
      content: msg,
      duration: duration
    });
    loader.present();
    return loader;
  }

}
