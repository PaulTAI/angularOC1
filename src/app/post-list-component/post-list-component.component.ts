import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

  listPost = [
    {
      titre: 'mon premier post',
      contenu: 'mon contenu 1'
    },
    {
      titre: 'mon deuxieme post',
      contenu: 'mon contenu 2'
    },
    {
      titre: 'mon troisieme post',
      contenu: 'mon contenu 3'
    }
];

  ngOnInit() {
  }
}
