import { Component, OnInit } from '@angular/core';
import { GlobalService } from './providers/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GlobalService]
})
export class AppComponent implements OnInit {

  constructor(private global: GlobalService) {}

  ngOnInit() {
    this.global.GetToken().then(response => {
      debugger;
      console.log(response.data);
    });
  }
}
