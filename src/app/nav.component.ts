/**
 * Created by krysn on 08.11.2016.
 */

import {Component} from "@angular/core";
import {UserService} from "./user.service";
import {User} from "./user";
import {DashboardComponent} from "./dashboard.component";
@Component({
    selector: 'navigationBar',
    templateUrl: './nav.component.html',
    styleUrls: ['./app.component.css']
})

export class NavComponent{
    constructor(private  userService: UserService, private dashBoard: DashboardComponent){
        this.user = userService.getUser();
        console.log(this.user);
    }
    user:User;
    logOut(){
        console.log("you logged out")
        this.user = this.userService.logOut();
        this.dashBoard.logOut(this.user);
    }
}