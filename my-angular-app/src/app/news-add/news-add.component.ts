import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.scss']
})
export class NewsAddComponent implements OnInit {

  public title: String = 'Add news';

  constructor() { }


  save() {
    console.log("Saved");
  }

  cancel() {
    window.history.back();
  }

  ngOnInit() {
  }

}
