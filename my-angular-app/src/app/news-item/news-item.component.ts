import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {NewsDataService} from '../news-data.service';


@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  constructor(private newsDataService: NewsDataService) { }

  @Input() article: any;

  @Input() isLocalNews: any;

  @Output() remove = new EventEmitter<any>();

  removeArticle(article) {
    this.newsDataService.delete( article.id);
    this.remove.emit({article: this.article});
  }

  setArticleValues(article) {
    console.log(article);
    /*this.articleFormGroup.setValue({
      id: article.id,
      title: article.title,
      author: article.author,
      publishedAt: article.publishedAt,
      url: article.url,
      urlToImage: article.urlToImage,
      description: article.description,
      content: article.content
    });*/
  }

  ngOnInit() {
  }

}

