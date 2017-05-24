import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersondetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-persondetail',
  templateUrl: 'persondetail.html',
})
export class PersondetailPage {

  person : any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = this.navParams.get('person_data'); // เก็บ object person_data ที่ส่งมาจาก person.ts ไว้ในตัวแปร person
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersondetailPage');
  }

}
