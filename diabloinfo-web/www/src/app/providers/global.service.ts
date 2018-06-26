import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import Axios from 'axios';
import {AxiosPromise} from 'axios';
import { Headers } from '@angular/http';

@Injectable()
export class GlobalService {
  constructor() { }

  GetToken(): AxiosPromise {
    const apiUrl = `https://us.battle.net/oauth/token?client_id=4t278c7h87hkze3ba7dsdenvvssgww4j&client_secret=UJzVM3xvASSKXb8fbnkKtcQJnhGn5J2m&grant_type=client_credentials`;
    return Axios.get(apiUrl);
  }

  GetLeaderboard(token: string): AxiosPromise {
    const apiUrl = `https://us.api.battle.net/data/d3/season/14/leaderboard/rift-team-4?access_token=${token}`;
    return Axios.get(apiUrl);
  }
}
