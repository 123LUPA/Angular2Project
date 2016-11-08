import {Book} from "./book";
/**
 * Created by krysn on 08.11.2016.
 */
export class User{
    id:number;
    name:string;
    email:string;
    password;string;
    books: Book[] = [];

}