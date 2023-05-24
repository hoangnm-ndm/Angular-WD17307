import { Component } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public name: string = 'Hoangnm';
  public user = {};
  public handleClick() {
    console.log(this.user);
  }
}
