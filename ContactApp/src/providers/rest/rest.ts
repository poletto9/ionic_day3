import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RestProvider {

  strURL: any = 'http://www.hpc11.go.th/dohphone-api/public/'; // url ของ restful

  constructor(public http: Http) {
    console.log('Hello RestProvider Provider');
  }

  // ส่ง request ไปยัง restful โดยส่ง user & password เพื่อขอ token
  doPostLogin(u: any, p: any) {
    let body: any = { username: u, password: p };
    return this.http.post(this.strURL + 'login', body)
      .map(res => <any>res.json());
  }

  // ดึงข้อมูล group จาก restful
  doGetGroup() {
    let header = new Headers({
      'x-token': localStorage.getItem('dohphone-token')
    })

    let option = new RequestOptions({ headers: header })

    return this.http.get(this.strURL + 'phone/group', option)
      .map(res => <any>res.json());
  }

  doGroupContact(dev_id) {

    let header = new Headers({
      'x-token': localStorage.getItem('dohphone-token')
    })

    let option = new RequestOptions({ headers: header })

    return this.http.get(this.strURL + 'phone/group/'+dev_id, option)
      .map(res => <any>res.json());
  }
}
