import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get("/api/books")
            .subscribe(data => {
              this.books = data;
            });
  }
}
