/**
 * Created by krysn on 07.11.2016.
 */
import {Component} from "@angular/core/src/metadata/directives";
import {BooksService} from "./books.service";
import {Book} from "./book";


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
    constructor(private bookService: BooksService){

    }
    books:Book[] = this.bookService.getBooks();

    onClick(){
        console.log(this.books);
    }
}