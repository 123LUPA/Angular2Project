import {Injectable} from "@angular/core";
import {User} from "./user";
/**
 * Created by krysn on 08.11.2016.
 */

@Injectable()
export class UserService {
    user:User = {
        id:0,
        email: '',
        name:'',
        password:''
    };

    setUser(user){
        user.id = 0;
        this.user = user;
        // console.log("user name " + this.user.name + " user password "+ this.user.password + " id "+ this.user.id + " user email " +
        //     this.user.email);

    }
    getUser():User{
        return this.user;
    }
    logOut():User{
        this.user = {
            id:0,
            email: '',
            name: '',
            password: ''
        }
        return this.user;
    }

}