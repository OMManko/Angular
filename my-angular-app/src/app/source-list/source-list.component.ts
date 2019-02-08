import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-source-list',
  templateUrl: './source-list.component.html',
  styleUrls: ['./source-list.component.scss']
})
export class SourceListComponent implements OnInit {

  public sourceList: any = [
    "BBC Sport", "CNBC", "CBC News", "Adafruit.com", "Newsbtc.com"
  ];

  constructor() { }

  ngOnInit() {
  }

}

