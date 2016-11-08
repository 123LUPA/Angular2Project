/**
 * Created by Palko on 06/11/2016.
 */

import {Component} from "@angular/core/src/metadata/directives";
import {User} from "./user";
import {UserService} from "./user.service";
import {Router} from "@angular/router";
@Component({
  selector:'my-register',
  templateUrl: './register.component.html',
  styleUrls: ['./dashboard.component.css']


})

export class RegisterComponent{
  user:User;
  constructor(private userService: UserService,  private router: Router){
    this.user = userService.getUser();
  }
  onSubmit({ value, valid }: {value: User, valid: boolean }) {

    this.user = value;
    this.userService.setUser(this.user);
    //redirect
    let link = ['/dashboard'];
    this.router.navigate(link);
  }

}
