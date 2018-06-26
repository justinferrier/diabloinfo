import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(250, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(1000, style({ opacity: 0 }))
      ])
    ]),
    trigger('fadeInOutFast', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(0, style({ opacity: 0 }))
      ])
    ])
  ],
})
export class LeaderboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
