import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {NewsDataService} from "../news-data.service";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})

export class NewsListComponent implements OnInit {

  constructor(private news: NewsDataService) {}

  @Input() sourceList: any;

  @Output() notify =new EventEmitter <any>();

  onClick() {
    this.notify.emit(alert('News will be loaded'))
  }

  ngOnInit() {
  }

}
