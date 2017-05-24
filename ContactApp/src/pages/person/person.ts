import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the PersonPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {

  contact_val: any
  division_id: any

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public rest: RestProvider) {
    this.division_id = this.navParams.get('dev_id')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
    this.feedGroupContact();
  }

  feedGroupContact() {
    this.rest.doGroupContact(this.division_id)
      .subscribe((data: any) => {
        console.log(data)
        this.contact_val = data.result
      }, (err) => {
        console.log(err)
      })
  }

  // call persondetail page with object parameter
  goPersonDetail(key_obj) {
    this.navCtrl.push('PersondetailPage',{person_data:key_obj});
  }

}
