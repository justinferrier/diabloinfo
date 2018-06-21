import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import Axios from 'axios';
import {AxiosPromise} from 'axios';

@Injectable()
export class GlobalService {
  constructor(private http: HttpClient, private router: Router, private jsonp: Jsonp) { }

  GetToken(): AxiosPromise {
    const apiUrl = `https://us.api.battle.net/d3/data/act?locale=en_US&apikey=4t278c7h87hkze3ba7dsdenvvssgww4j`;
    return Axios.get(apiUrl);
  }
}
