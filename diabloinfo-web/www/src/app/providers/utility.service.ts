import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class UtilityService {
  constructor(private datePipe: DatePipe) { }

  msToTime(ms) {
    const seconds = (ms / 1000) % 60,
          minutes = (ms / (1000 * 60)) % 60;

    return Math.round(minutes) + 'm ' + seconds.toFixed(3) + 's';
  }

  msToDate(ms) {
    const date = new Date(ms).getTime();
    return this.datePipe.transform(date, 'mediumDate') + ' ' + this.datePipe.transform(date, 'mediumTime');
  }
}
