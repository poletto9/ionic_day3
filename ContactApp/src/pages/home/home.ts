import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'; // เพิ่มขึ้นมาใหม่ตอน get ค่าจาก json

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  group_val : any

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public app: App,
    public alertCtrl: AlertController,
    public rest: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    
    //call function
    this.feedGroup();
  }

  doLogout() {

    let confirm = this.alertCtrl.create({
      title: 'Confirmation?',
      message: 'Do you agree to exit?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            localStorage.removeItem('dohphone-username');
            localStorage.removeItem('dohphone-token');
            // this.navCtrl.setRoot('LoginPage');
            this.app.getRootNav().setRoot('LoginPage'); // กรณ๊เพจเป็นแบบ TAB
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();

  }

  feedGroup() {
    this.rest.doGetGroup()
      .subscribe((data: any) => {
        console.log(data)
        this.group_val = data.result
      }, (err) => {
        console.log(err)
      })
  }

  goContact(id){
    // alert(id);
    this.navCtrl.push('PersonPage',{dev_id:id});
  }

}
