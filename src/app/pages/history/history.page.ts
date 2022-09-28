import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobaldataService } from 'src/app/globaldata.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  history;
  display;

  constructor() { 

  }

  ngOnInit() {
    this.display = this.history;
    //alert(this.history);
  }

}
