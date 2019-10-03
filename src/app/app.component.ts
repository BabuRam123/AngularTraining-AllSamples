import { Component } from '@angular/core';
import {AccountInformation} from './AccountInformation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Display Account details using oneway binding, ngIF, ngFor';
  twowaytext='Twoway binding';
  setTwowaybind:string="Hello";
  accountlist=[
    new AccountInformation(1,'Siva'),
    new AccountInformation(2,'Babu'),
    new AccountInformation(3,'Arun'),
    new AccountInformation(4,'Nandha')
  ];

  

}
