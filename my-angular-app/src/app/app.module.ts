import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { SourceListComponent } from './source-list/source-list.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { NewsComponent } from './news/news.component';
import {NewsDataService} from "./news-data.service";


const AppRoutes: Routes = [
  {path: '', component: NewsListComponent, data: { title: 'Source name' }},
  {path: 'news-article/:id', component: NewsArticleComponent, data: { title: 'Source name' }},
  {path: 'news-edit', component: NewsEditComponent, data: { title: 'Edit' }},
  {path: 'news-add', component: NewsAddComponent, data: { title: 'Add' }},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsItemComponent,
    SourceListComponent,
    NewsArticleComponent,
    NewsEditComponent,
    NewsListComponent,
    NewsAddComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [NewsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
