import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly URI = 'https://61cae183194ffe00177889e2.mockapi.io/api/workshop'

  constructor(private _http: HttpClient) { }

  getAllProduct(): Observable<any>{
    return this._http.get(this.URI + '/products');
  }
}
