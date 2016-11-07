import {Book} from "./book";
import {Injectable} from "@angular/core";
/**
 * Created by krysn on 07.11.2016.
 */

@Injectable()
export class BooksService{

     Books: Book[] = [
         {id:1, title: 'Sample', dis: 'awesome', path: 'http://www.propertyforumbudapest.com/wp-content/uploads/2014/01/Things-to-Look-For-When-Buying-Land.jpg'},
         {id:2, title: 'Sample ', dis: 'awesome', path: 'https://www.landcentury.com/wp-content/uploads/owner-financed-land-for-sale-advantages-300x300.jpg'},
         {id:3, title: 'Sample ', dis: 'awesome', path: 'http://benyhomes.com/uploads/thumbs/LAND.jpg'},
         {id:4, title: 'Sample ', dis: 'awesome', path: 'https://www.cul2vate.org/wp-content/uploads/2015/07/donate-land-image.jpg'},
         {id:5, title: 'Sample ', dis: 'awesome', path: 'https://www.landcentury.com/wp-content/uploads/finding-lease-land-300x300.jpg'},
         {id:6, title: 'Sample ', dis: 'awesome', path: 'http://i.ebayimg.com/images/g/JqcAAOSwhOdXomYf/s-l300.jpg'},
         {id:7, title: 'Sample', dis: 'awesome', path: 'http://i.ebayimg.com/00/s/ODAwWDgwMA==/z/WrsAAOSwdIFX11z~/$_35.JPG'},
         {id:8, title: 'Sample ', dis: 'awesome', path: 'http://www.88propertiesinfo.com/files/uploads/2016/05/WhatsApp-Image-20160505-14-300x300.jpg'},
         {id:9, title: 'Sample', dis: 'awesome', path: 'https://sitebridge.farmcreditbank.com/f/img/40/talb-texas-land-for-sale.jpg'},
         {id:10, title: 'Sample', dis: 'awesome', path: 'http://www.propertyforumbudapest.com/wp-content/uploads/2014/05/Basic-Points-to-Remember-While-Buying-Land.jpg'},
         {id:11, title: 'Sample', dis: 'awesome', path: 'http://pop.h-cdn.co/assets/cm/15/05/54caa237d5ad2_-_coalmininglandfactory_300_0510-md.jpg'},
         {id:12, title: 'Sample', dis: 'awesome', path: 'http://www.travelntales.com/media/1025/salalah-thumbnail_300x300.jpg'},
     ]

    getBooks():Book[]{
             return this.Books;
    }
}