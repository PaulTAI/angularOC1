import { Component, OnInit, Input } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})

export class PostListItemComponentComponent implements OnInit {

  love: number; // équivalent à  loveIts: string;
  @Input() postName: string;  // équivalent à Titre: string;
  @Input() postContenu: string; // équivalent à content: string;
  Created_at = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 1000
      );
    });

  constructor() {
    this.love = 0;
   }

  ngOnInit() {
  }

  onPressLove() {
    console.log('Vous avez love ' +  this.love);
    this.love++;
  }
  onPressHate() {
    console.log('Vous avez hate ' +  this.love);
    this.love--;
  }

  getColor() {
    if (this.love < 0) {
      return 'red';
    } else if (this.love > 0) {
      return 'green';
    } else {
      return;
    }
  }

}
