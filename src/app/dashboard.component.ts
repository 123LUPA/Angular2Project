/**
 * Created by krysn on 07.11.2016.
 */
import {Component} from "@angular/core/src/metadata/directives";
import {BooksService} from "./books.service";
import {Book} from "./book";
import {UserService} from "./user.service";
import {OnInit} from "@angular/core";
import {User} from "./user";


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent  {
    user:User;



    constructor(private bookService: BooksService, private userService: UserService){
        this.user = this.userService.getUser();
    }
    books:Book[] = this.bookService.getBooks();

    onClick(){
        console.log(this.books);
    }

    logOut(user){
        this.user = user;
    }
    addFavourite(book:Book){
        // this.user.books.push(book.id);
        // console.log(this.user.book);
    }
}