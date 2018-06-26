import { Component, OnInit } from '@angular/core';
import { GlobalService } from './providers/global.service';
import { DatePipe } from '@angular/common';
import { UtilityService } from './providers/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GlobalService, UtilityService, DatePipe]
})
export class AppComponent implements OnInit {

  accessToken: string;
  apiKey: '4t278c7h87hkze3ba7dsdenvvssgww4j';

  constructor(private global: GlobalService, private utils: UtilityService) {}

  ngOnInit() {
  }

  barbLeaderboard() {
    this.global.GetLeaderboard('efm72nyteubaks2f5wb5y3k7').then(response => {
      const barbleaderboard = response.data.row;
      console.log(barbleaderboard);
      for ( const b of barbleaderboard) {
        // b.data[2].timestamp = this.utils.msToTime(b.data[2].timestamp);
        // b.data[3].timestamp = this.utils.msToDate(b.data[3].timestamp);
        for (let i = 0; i < 3; i++) {
          if (i === 0) {
            if (b.player[i].data[2].string === 'crusader') {
              console.log(b);
            }
          } else {
            if (b.player[i].data[2].string === 'crusader') {
              debugger;
              console.log(b);
            }
          }
        }
        // console.log('Rank ' + b.data[0].number + ' Barbarian. @ Rift ' + b.data[1].number + ' ' + b.data[2].timestamp + ': ' + b.data[4].string);
      }
    });
  }
}
